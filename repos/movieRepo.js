const { ObjectId } = require("mongodb");
const client = require("../db/database");

const getAllMovies = async () => {
  await client.connect();
  const db = client.db('movies-db')
  const collection = db.collection('movies')
  const movies = await collection.find({}).toArray()
  await  client.close();
  return movies;
};

const addMovie = async (movie) => {
  await client.connect();
  const db = client.db('movies-db')
  const collection = db.collection('movies')
  const addedmovie = await collection.insertOne(movie)
  await  client.close();
  return addedmovie
}

const getMovie = async (movieId) => {
  await client.connect();
  const db = client.db('movies-db')
  const collection = db.collection('movies')
  const movie = await collection.findOne({_id: new ObjectId(movieId)})
  await  client.close();
  return movie
}

const deleteMovie = async (movieId) => {
  await client.connect();
  const db = client.db('movies-db')
  const collection = db.collection('movies')
  console.log(movieId);
  const deletedmovie = await collection.deleteOne({_id: new ObjectId(movieId)})
  await  client.close();
  return deletedmovie
}

const updateMovie = async (movieId, movie) => {
  await client.connect();
  const db = client.db('movies-db')
  const collection = db.collection('movies')
  const updatedmovie = await collection.updateOne({_id: new ObjectId(movieId)}, {$set: {...movie}})
  await  client.close();
  return updatedmovie
}
module.exports = {
  getAllMovies,
  addMovie,
  getMovie,
  deleteMovie,
  updateMovie
};
