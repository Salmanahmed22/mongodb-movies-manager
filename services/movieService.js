const movieRepo = require("../repos/movieRepo");

const getAllMovies = async () => {
  return await movieRepo.getAllMovies();
};

const addMovie = async (movie) => {
  return await movieRepo.addMovie(movie);
};

const getMovie = async (movieId) => {
  console.log("okkk");
  return await movieRepo.getMovie(movieId)
}

module.exports = {
  getAllMovies,
  addMovie,
  getMovie
};
