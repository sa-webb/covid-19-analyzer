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

const us_confirmed_growth_curve = [
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
  },
  {
    $project: {
      values: {
        $objectToArray: '$data'
      }
    }
  }
];

const us_recovered_growth_curve = [
  {
    $match: {
      index: 'csse-all-recovered'
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
  },
  {
    $project: {
      values: {
        $objectToArray: '$data'
      }
    }
  }
];

const us_deaths_growth_curve = [
  {
    $match: {
      index: 'csse-all-deaths'
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
  },
  {
    $project: {
      values: {
        $objectToArray: '$data'
      }
    }
  }
];

module.exports = {
  us_total_confirmed,
  us_confirmed_growth_curve,
  us_recovered_growth_curve,
  us_deaths_growth_curve
};
