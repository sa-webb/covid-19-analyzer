const { MongoClient, ObjectId } = require('mongodb')
const options = require('../config/index.js')
const connectionUrl = 'mongodb://localhost:27017'
const dbName = 'covid-19'

let db

const init = () =>
  MongoClient.connect(connectionUrl, options).then((client) => {
    db = client.db(dbName)
  })

const getAllArray = () => {
  const collection = db.collection('march')
  return collection.find({}).toArray()
}

const getAll = () => {
  const collection = db.collection('march')
  return collection.findOne({})
}

module.exports = { init, insertItem, getItems, updateQuantity, getAll }