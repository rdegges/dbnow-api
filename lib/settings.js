'use strict';

module.exports = {
  // Port the server will bind to.
  PORT: process.env.PORT || '3000',

  // Default amount of time that databases will live for (in hours). Can be set
  // anywhere between 1 and 24 (1 day).
  TTL: 1,

  // The lower and upper limits of time (in hours) allowed for databases to
  // exist.
  MIN_TTL: 1,
  MAX_TTL: 24,

  // Default AWS region in which to create databases.
  REGION: 'us',

  // List of available AWS regions in which to create databases.
  AVAILABLE_REGIONS: ['us', 'eu'],

  // List of available database types to provision.
  AVAILABLE_TYPES: ['postgres']
};
