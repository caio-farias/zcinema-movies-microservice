const express = require('express')
const MoviesController = require('./controllers/MoviesController')
const MicServiceAuthMiddleware = require('./middlewares/MicserviceAuth')
const CheckQuery = require('./middlewares/CheckQuery')
const routes = express.Router()

routes.post('/movies', MicServiceAuthMiddleware, MoviesController.createMovie)
routes.get('/movies', [MicServiceAuthMiddleware, CheckQuery],  MoviesController.getAllMovies)
routes.get('/movies/:id', MicServiceAuthMiddleware, MoviesController.getMovie)
routes.patch('/movies/:id', MicServiceAuthMiddleware, MoviesController.updateMovie)
routes.delete('/movies/:id', MicServiceAuthMiddleware, MoviesController.deleteMovie)



module.exports = routes