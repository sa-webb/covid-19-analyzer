import os
import pandas as pd
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv('.env')
print(os.getenv('MONGO_URI'))

df = pd.read_csv(
    './data/COVID-19/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_US.csv')

print(df)