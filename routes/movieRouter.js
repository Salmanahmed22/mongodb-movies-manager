const express = require("express");
const movieRouter = express.Router();
const auth = require("../middleware/auth");

const movieController = require("../controllers/movieController");

movieRouter.get("/all", auth, movieController.getAllMovies);
movieRouter.post("/add", auth, movieController.addMovie);
movieRouter.get("/:id", auth, movieController.getMovie);
movieRouter.delete("/:id",auth, movieController.deleteMovie);

module.exports = movieRouter;
