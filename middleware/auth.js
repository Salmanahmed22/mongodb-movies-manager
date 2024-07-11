const authMiddleware = async (req, res, next) => {
  // HANDLE MIDDLEWARE STUFF, REQ - RES
  console.log("USER IS AUTH SUCCESS");
  next();
};

module.exports = authMiddleware;
