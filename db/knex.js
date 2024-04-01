let environment = process.env.NODE_ENV || 'development';
let knexfile = require('../knexfile.js')[environment];

if (environment === 'test') {
    knexfile = require('../knexfile.js')['test'];
}

module.exports = require('knex')(knexfile);
