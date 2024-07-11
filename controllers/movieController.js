const Movie = require("../models/movie");
const movieService = require("../services/movieService");

const getAllMovies = async (req, res) => {
  //HANDLE CONTROLLER STUFF, REQ - RES
  const movies = await movieService.getAllMovies();
  res.send(movies);
};

const addMovie = async (req, res) => {
  try {
    const movie = req.body;
    const addedMovie = await movieService.addMovie(movie);
    res.send(`${movie.name} added successfully`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const getMovie = async (req, res) => {
  try{
    const movieId = req.params.id
    const movie = await movieService.getMovie(movieId)
    console.log(movie);
    console.log("aloooo");
    res.status(200).json(movie)
  }catch(error){
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
module.exports = {
  getAllMovies,
  addMovie,
  getMovie
};
