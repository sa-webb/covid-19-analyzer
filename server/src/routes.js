const express = require('express');
const { getItems, getAllWHO, getMarchWHO, getAllConfirmedCSSE, getUSConfirmedCSSE, usConfirmedTotal } = require('./db');

const router = express.Router();

router.get('/who-march', (req, res) => {
  getMarchWHO()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).end();
    });
});

router.get('/who-global', (req, res) => {
  getAllWHO()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).end();
    });
});
router.get('/csse-confirmed', (req, res) => {
  getAllConfirmedCSSE()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).end();
    });
});
router.get('/us-confirmed', (req, res) => {
  getUSConfirmedCSSE()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).end();
    });
});

router.get('/aggtest', async (req, res) => {
  await usConfirmedTotal()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).end();
    });
});

router.get('/arraydata', (req, res) => {
  getItems()
    .then(items => {
      items = items.map(item => ({
        id: item._id,
        name: item.name,
        quantity: item.quantity
      }));
      res.json(items);
    })
    .catch(err => {
      console.log(err);
      res.status(500).end();
    });
});

module.exports = router;
