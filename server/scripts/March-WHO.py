import pandas as pd
from pymongo import MongoClient

df = pd.read_csv(
    './data/COVID-19/who_covid_19_situation_reports/who_covid_19_sit_rep_time_series/who_covid_19_sit_rep_time_series.csv')

# print(df.shape)
# (123, 52)

# Feature slice
march_data = df[['Province/States', 'Country/Region', '3/1/2020', '3/2/2020',
                 '3/3/2020', '3/4/2020', '3/5/2020']]

client = MongoClient("mongodb://localhost:27017/")
db = client["covid-19"]
col = db["march"]

march_data.reset_index(inplace=True)  # Reset Index
data_dict = march_data.to_dict("records")  # Convert to dictionary
col.insert_one({"index": "WHO", "data": data_dict})  # inesrt into DB
