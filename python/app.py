import os
import pandas as pd
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv('.env')
print(os.getenv('MONGO_URI'))

df = pd.read_csv(
    './data/COVID-19/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv')

print(df)

df_cleansed = df.rename(
    columns={'Province/State': 'province_state', 'Country/Region': 'country_region'})
print(df_cleansed)

client = MongoClient(os.getenv('MONGO_URI'))
db = client[os.getenv('DB')]
col = db["csse"]

df_cleansed.reset_index(inplace=True)  # Reset Index
data_dict = df_cleansed.to_dict("records")  # Convert to dictionary
col.insert_one({"index": "csse-all-confirmed", "current_date": "3/30/20", "data": data_dict})  # insert into DB

print('inserted data')
