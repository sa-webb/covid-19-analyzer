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

module.exports = {
  us_total_confirmed
};