import os
import datetime
import pandas as pd
from dotenv import load_dotenv
from pymongo import MongoClient

df = pd.read_csv(
    './data/COVID-19/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_US.csv')

df_cleansed = df.rename(
    columns={'Province/State': 'province_state', 'Country/Region': 'country_region'})

load_dotenv('.env')
client = MongoClient(os.getenv('MONGO_URI'))
db = client[os.getenv('DB')]
col = db["csse"]

df_cleansed.reset_index(inplace=True)  # Reset Index
data_dict = df_cleansed.to_dict("records")  # Convert to dictionary


x = datetime.datetime.now()
current_date = x.strftime("%D")

col.insert_one({"index": "csse-all-us-confirmed", "current_date": current_date, "data": data_dict})  # insert into DB

print('inserted data')
