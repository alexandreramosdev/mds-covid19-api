const {Router} = require('express')

const DataController = require('./controllers/DataController')

const routes = new Router()

routes.get('/', DataController.index)

module.exports = routes
