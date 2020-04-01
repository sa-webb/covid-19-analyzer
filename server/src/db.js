const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
const options = require('../config/index.js');

const {
  us_total_confirmed,
  us_confirmed_growth_curve,
  us_recovered_growth_curve,
  us_deaths_growth_curve
} = require('./aggregations');

let db;

const init = () =>
  MongoClient.connect(process.env.MONGO, options).then(client => {
    db = client.db(process.env.DB);
  });

const usConfirmedTotal = async (req, res) => {
  const collection = db.collection('csse');
  return collection.aggregate(us_total_confirmed).toArray();
};
const usConfirmedGrowthCurve = async (req, res) => {
  const collection = db.collection('csse');
  return collection.aggregate(us_confirmed_growth_curve).toArray();
};
const usRecoveredGrowthCurve = async (req, res) => {
  const collection = db.collection('csse');
  return collection.aggregate(us_recovered_growth_curve).toArray();
};
const usDeathsGrowthCurve = async (req, res) => {
  const collection = db.collection('csse');
  return collection.aggregate(us_deaths_growth_curve).toArray();
};

module.exports = {
  init,
  usConfirmedTotal,
  usConfirmedGrowthCurve,
  usRecoveredGrowthCurve,
  usDeathsGrowthCurve
};
