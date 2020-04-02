import os
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv('.env')

client = MongoClient(os.getenv('MONGO_URI'))
db = client[os.getenv('DB')]
col = db["csse"]

db.col.deleteMany({})