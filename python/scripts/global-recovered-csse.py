import os
import pandas as pd
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv('.env')

df = pd.read_csv(
    './data/COVID-19/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv')

# print(df)

df_cleansed = df.rename(columns={'Province/States': 'province_states', 'Country/Region': 'country_region'})

print(df_cleansed)

# client = MongoClient(os.getenv('MONGO_URI'))
# db = client[os.getenv('DB')]
# col = db["csse"]

# df_cleansed.reset_index(inplace=True)  # Reset Index
# data_dict = df_cleansed.to_dict("records")  # Convert to dictionary
# col.insert_one({"index": "csse-all", "data": data_dict})  # insert into DB

# print('success')