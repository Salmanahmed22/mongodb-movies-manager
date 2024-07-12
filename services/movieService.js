const movieRepo = require("../repos/movieRepo");

const getAllMovies = async () => {
  return await movieRepo.getAllMovies();
};

const addMovie = async (movie) => {
  return await movieRepo.addMovie(movie);
};

const getMovie = async (movieId) => {
  return await movieRepo.getMovie(movieId)
}

const deleteMovie = async (movieId) => {
  return await movieRepo.deleteMovie(movieId)
}


const updateMovie = async (movieId, movie) => {
  return await movieRepo.updateMovie(movieId, movie)
}
module.exports = {
  getAllMovies,
  addMovie,
  getMovie,
  deleteMovie,
  updateMovie
};
