const knex = require('knex');
const configuration = require('../../knexfile');
const env = process.env.NODE_ENV;

const connection = knex(configuration[env]);

module.exports = connection;