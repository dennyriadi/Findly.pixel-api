'use strict';

module.exports = {
  'port': 8081,
  'captureLogs': false,
  'logentriesToken': '',
  'newrelic': {
    'appName': '${NR_APP_NAME}',
    'licenseKey': '${NR_LICENSE_KEY}'
  },
  'db': {
    'host': 'prod-mysql-visitortracking-private.chffai8ydksb.us-west-1.rds.amazonaws.com',
    'username': 'guest',
    'password': 'Monday99',
    'name': 'qa1-dmp'
  }
};
