const express = require("express");
const { login, sign } = require("./../controllers/userController");

const getUserMiddleware = (req, res, next) => {
  console.log("get user");
  next();
};

const userRouter = express.Router();

userRouter.get("/", getUserMiddleware, login);
userRouter.post("/", getUserMiddleware, sign);

module.exports = userRouter;
