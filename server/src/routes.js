const express = require('express')
const { getItems, getAll, getMarch } = require('./db')

const router = express.Router()

router.get('/data', (req, res) => {
  getMarch()
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end()
    })
})

router.get('/global', (req, res) => {
  getAll()
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end()
    })
})



router.get('/arraydata', (req, res) => {
  getItems()
    .then((items) => {
      items = items.map((item) => ({
        id: item._id,
        name: item.name,
        quantity: item.quantity
      }))
      res.json(items)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end()
    })
})

module.exports = router