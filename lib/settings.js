'use strict';

module.exports = {
  // Port the server will bind to.
  PORT: process.env.PORT || '3000'

  // Default amount of time that databases will live for (in hours). Can be set
  // anywhere between 1 and 24 (1 day).
  TTL: 1,

  // Default AWS region in which to create databases. This can be set to either
  // 'us' or 'eu' currently.
  REGION: 'us'
};
