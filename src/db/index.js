const Sequelize = require('sequelize')
const dbConfig = require('./config')
const Movie = require('../models/Movie')

const connection = new Sequelize(dbConfig)

Movie.init(connection)

module.exports = connection