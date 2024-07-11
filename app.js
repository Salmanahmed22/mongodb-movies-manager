const express = require("express");
const movieRouter = require("./routes/movieRouter");

const app = express();

//global middleware that let you use json body in post request
app.use(express.json());

app.use("/movies", movieRouter);

app.listen(3000, () => {
  console.log("listening on port 3000");
});



//SOA mrs-cr
// app.js
//routes
//controllers
//services
//reposories
//models+db
