'use strict';

let express = require('express');
let settings = require('./lib/settings');

let app = express();

app.get('/', function(req, res, next) {
  let type = req.query.type;
  let ttl = req.query.ttl;
  let region = req.query.region || settings.REGION;
  let errors = [];

  ttl = (ttl === undefined) ? settings.TTL : parseInt(ttl);

  if (type === undefined) {
    errors.push('No type specified. Options are: ' + settings.AVAILABLE_TYPES.join(', ') + '.');
  } else if (settings.AVAILABLE_TYPES.indexOf(type) === -1) {
    errors.push('Invalid type specified. Options are: ' + settings.AVAILABLE_TYPES.join(', ') + '.');
  }

  if (settings.AVAILABLE_REGIONS.indexOf(region) === -1) {
    errors.push('Invalid region specified. Options are: ' + settings.AVAILABLE_REGIONS.join(', ') + '.');
  }

  if (ttl < settings.MIN_TTL || ttl > settings.MAX_TTL) {
    errors.push('Invalid ttl specified. Must be between: ' + settings.MIN_TTL + ' and ' + settings.MAX_TTL + ' (hours).');
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors: errors });
  }

  return res.json({ status: 'ok!' });
});

app.listen(settings.PORT);
