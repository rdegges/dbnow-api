'use strict';

var express = require('express');
var settings = require('./lib/settings');

var app = express();

app.listen(settings.PORT);
