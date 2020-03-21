import pandas as pd
from pymongo import MongoClient

df = pd.read_csv(
    './data/COVID-19/who_covid_19_situation_reports/who_covid_19_sit_rep_time_series/who_covid_19_sit_rep_time_series.csv')

df_new = df.rename(columns={'Province/States': 'province_states', 'Country/Region': 'country_region'})
#print(df_new)


# Feature slice
march_data = df_new[['province_states', 'country_region', '3/1/2020', '3/2/2020',
                 '3/3/2020', '3/4/2020', '3/5/2020']]

# print(march_data)

client = MongoClient("mongodb://localhost:27017/")
db = client["covid-19"]
col = db["march"]

march_data.reset_index(inplace=True)  # Reset Index
data_dict = march_data.to_dict("records")  # Convert to dictionary
col.insert_one({"index": "WHO-March", "data": data_dict})  # insert into DB
