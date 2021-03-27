const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return next(new createHttpError.Unauthorized());
  }

  jwt.verify(token, process.env.SECRET_JWT, (err, decoded) => {
    if (err) {
      return next(new createHttpError.Forbidden());
    }

    req.user = decoded.user;

    next();
  });
}

module.exports = {
  authenticateToken,
};
