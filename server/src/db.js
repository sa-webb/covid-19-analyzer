const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
const options = require('../config/index.js');

let db;

const init = () =>
  MongoClient.connect(process.env.MONGO, options).then(client => {
    db = client.db(process.env.DB);
  });

const getAllArray = () => {
  const collection = db.collection('march');
  return collection.find({}).toArray();
};

const getMarch = () => {
  const collection = db.collection('march');
  return collection.findOne({});
};
const getAll = () => {
  const collection = db.collection('WHO');
  return collection.findOne({});
};

module.exports = { init, getAll, getAllArray, getMarch };
