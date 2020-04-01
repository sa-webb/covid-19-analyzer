const express = require('express');
const {
  usConfirmedTotal,
  usConfirmedGrowthCurve,
  usRecoveredGrowthCurve,
  usDeathsGrowthCurve
} = require('./db');

const router = express.Router();

router.get('/us-agg-total', async (req, res) => {
  await usConfirmedTotal()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).end();
    });
});
router.get('/us-confirmed-growth-curve', async (req, res) => {
  await usConfirmedGrowthCurve()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).end();
    });
});

router.get('/us-recovered-growth-curve', async (req, res) => {
  await usRecoveredGrowthCurve()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).end();
    });
});
router.get('/us-deaths-growth-curve', async (req, res) => {
  await usDeathsGrowthCurve()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).end();
    });
});

module.exports = router;
