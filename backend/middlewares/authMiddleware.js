const jwt = require("jsonwebtoken");

//verify jwt token function
const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

const authMiddleware = (req, res, next) => {
  //get token from cookies
  const { token } = req.cookies;
  //check the token is authenticated or not
  console.log("Middleware running");
  if (!token) {
    console.log("Please login first");
    //throw error

    throw new Error("Please login first", 401);
  }
  //if token is authenticated, verify token
  const decoded = verifyToken(token);

  //if token expires or not
  if (!decoded) {
    console.log("Token expired");
    throw new Error("Token expired", 401);
  }

  //if token is not expired, req.user = decoded
  req.user = decoded;

  next();
  //if token is authenticated, verify token
};

module.exports = authMiddleware;
