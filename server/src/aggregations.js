const us_total_confirmed = [
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
      _id: 'us_total_confirmed',
      total: {
        $sum: '$data.3/21/20'
      }
    }
  }
];

const us_growth_curve = [
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
    $project: {
      'data.index': false,
      'data.country_region': false,
      'data.province_state': false,
      'data.Lat': false,
      'data.Long': false
    }
  }
];

module.exports = {
  us_total_confirmed,
  us_growth_curve
};
