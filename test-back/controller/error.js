module.exports = (error, req, res, next) => {
  if (!error.statusCode) {
    error.statusCode = 500;
  }

  if (error.statusCode === 500) {
    error.msg = "Internal Server Error";
  }

  res.status(error.statusCode).json(error);
};
