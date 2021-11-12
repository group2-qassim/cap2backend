const express = require("express");
const {
  login,
  sign,
  addToFav,
  getFav,
} = require("./../controllers/userController");

const getUserMiddleware = (req, res, next) => {
  console.log("get user");
  next();
};

const userRouter = express.Router();

userRouter.get("/login", getUserMiddleware, login);
userRouter.post("/sign", getUserMiddleware, sign);
userRouter.post("/addToFav", getUserMiddleware, addToFav);
userRouter.get("/getFav", getUserMiddleware, getFav);

module.exports = userRouter;
