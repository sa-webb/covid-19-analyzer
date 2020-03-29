import pandas as pd
from pymongo import MongoClient

df = pd.read_csv(
    './data/COVID-19/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv')

# print(df)

df_cleansed = df.rename(columns={'Province/States': 'province_states', 'Country/Region': 'country_region'})
print(df_cleansed)

# Feature slice
march_data = df_cleansed[['province_states', 'country_region', '3/1/2020', '3/2/2020','3/3/2020', '3/4/2020', '3/5/2020']]

# print(march_data)

client = MongoClient("mongodb://localhost:27017/")
db = client["covid-19"]
col = db["csse"]

df_cleansed.reset_index(inplace=True)  # Reset Index
data_dict = df_cleansed.to_dict("records")  # Convert to dictionary
col.insert_one({"index": "csse-all-recovered", "data": data_dict})  # insert into DB

print('inserted data')