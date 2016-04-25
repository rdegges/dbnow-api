'use strict';

var path = require('path')

var massive = require('massive');
var settings = require('./settings');

var db = massive.connectSync({
  connectionString: settings.DATABASE_URL + '?ssl=true',
  scripts: path.join(__dirname, '..', 'queries')
});

module.exports = db;
