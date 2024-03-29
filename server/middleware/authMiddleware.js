const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      //console.log(JSON.parse(token));
      const decoded = jwt.verify(JSON.parse(token), process.env.JWT_SECRET);
      console.log(decoded)
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("not authorized token failed");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("not authorized no token");
  }
});

module.exports = { protect };
