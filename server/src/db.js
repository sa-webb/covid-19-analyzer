const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
const options = require('../config/index.js');

const { us_total_confirmed, us_growth_curve } = require('./aggregations')

let db;

const init = () =>
  MongoClient.connect(process.env.MONGO, options).then(client => {
    db = client.db(process.env.DB);
  });

const getAllArray = () => {
  const collection = db.collection('WHO');
  return collection.find({ index: 'WHO-All' }).toArray();
};

const getMarchWHO = () => {
  const collection = db.collection('march');
  return collection.findOne({ index: 'WHO-March' });
};

const getAllWHO = () => {
  const collection = db.collection('WHO');
  return collection.findOne({ index: 'WHO-All' });
};

const getAllConfirmedCSSE = () => {
  const collection = db.collection('csse');
  return collection.findOne({ index: 'csse-all-confirmed' });
};

const usConfirmedTotal = async (req, res) => {
  const collection = db.collection('csse');
  return collection
    .aggregate(us_total_confirmed)
    .toArray();
};
const usGrowthCurve = async (req, res) => {
  const collection = db.collection('csse');
  return collection
    .aggregate(us_growth_curve)
    .toArray();
};

const getUSConfirmedCSSE = async (req, res) => {
  const collection = db.collection('csse');
  const results = collection.aggregate(
    [
      {
        $match: {
          index: 'csse-all-confirmed'
        }
      },
      {
        $unwind: {
          path: '$data'
        }
      },
      {
        $match: {
          'data.country_region': 'US'
        }
      },
      {
        $group: {
          _id: 1,
          total: {
            $sum: '$data.3/21/20'
          }
        }
      }
    ],
    function(err, results) {
      if (err) {
        res.json(500, err);
      } else {
        res.json(results);
      }
    }
  );
  console.log(results);
};

module.exports = {
  init,
  getAllWHO,
  getAllArray,
  getMarchWHO,
  getAllConfirmedCSSE,
  getUSConfirmedCSSE,
  usConfirmedTotal,
  usGrowthCurve
};
