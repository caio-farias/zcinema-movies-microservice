const Movie = require("../models/Movie")
const { Op, or } = require('sequelize')

module.exports = {
  async createMovie(req, res) {
    const { 
      title, 
      description, 
      trailer,
      start_date,
      end_date,
      banner,
      schedules
    } = req.body

    try {
      const isSameMovie = await Movie.findOne({ where: { title : title } })
      if(isSameMovie){
        return res.status(409).json({ message: "Filme já existe."})
      }
      const movie = await Movie.create({ 
        title, 
        description, 
        trailer,
        start_date,
        end_date,
        banner,
        schedules
      })

      return res.status(201).json(movie)
    } catch (error) {
      return res.status(500).json({ message: "Ocorreu um erro, tente novamente." })
    }
  },
  async getAllMovies(req, res){
    try {
      const { title } = req.query
      const { protocol, path } = req
      const page = parseInt(req.query.page)
      const limit = parseInt(req.query.limit)

      if(!title){
        var movies = await Movie.findAll({ limit: limit + 1, offset: page })
      } else {
        const { rows } = await Movie.findAndCountAll(
          {
            where:{
              title: {
                [Op.iLike]: title + '%'
              },
            },
            limit: limit + 1,
            offset: page
          })
        var movies = rows
      }

      const next = `${protocol}://${req.get('host')}${path}?` +
        `title=${title}&limit=${limit}&page=${page + limit}`
      
      const previous = `${protocol}://${req.get('host')}${path}?` +
        `title=${title}&limit=${limit}&page=${page - limit > 0 ? page - limit : 0}`
        
      return res.status(200).json({ 
        count: movies.length > 1 ? movies.length - 1: 0, 
        previous: movies.length > 1 ? previous: '', 
        next: movies.length > 1 ? next: '',
        movies
      })

    } catch (error) {
      return res.status(500).json({ message: "Ocorreu um erro, tente novamente." })
    }
  },
  async getMovie(req, res){
    const { id } = req.params
    try {
      const movie = await Movie.findOne({ where: { id: id } })
      if(!movie)
        return res.status(409).json({ message: "Filme inexistente" })
        
      return res.json(movie)
    } catch (error) {
      return res.status(500).json({ message: "Ocorreu um erro, tente novamente." })
    }
  },
  async updateMovie(req, res){
    const { id } = req.params
    const { 
      title, 
      description, 
      trailer,
      start_date,
      end_date,
      banner,
      schedules

    } = req.body

    try {
      const movie = await Movie.findOne({ where: { id: id }})
      if(!movie){
        return res.status(409).json({ message: "Filme não existe." })
      }
      movie.update({
        title, 
        description, 
        trailer,
        start_date,
        end_date,
        banner,
        schedules,

      }, { where: { id: id } })
      return res.json(movie)
    } catch (error) {
      return res.status(500).json({ message: "Ocorreu um erro, tente novamente." })
    }
  },
  async deleteMovie(req, res){
    const { id } = req.params
    try {
      const movie = await Movie.findOne({ where: { id: id } })
      if(!movie){
        return res.status(409).json({ message: "Filme não existe." })
      }
      await movie.destroy()
      return res.json({ message: "Filme deletado com sucesso!"})
    } catch (error) {
      return res.status(500).json({ message: "Ocorreu um erro, tente novamente." })
    }
  }
}