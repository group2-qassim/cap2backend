const express = require("express");
const {
  getAllTvShow,
  getTvShowById,
} = require("./../controllers/tvShowController");

const getAllTvShowMiddleware = (req, res, next) => {
  console.log("get All Movies");
  next();
};

const tvShowRouter = express.Router();

tvShowRouter.get("/", getAllTvShowMiddleware, getAllTvShow);

tvShowRouter.get("/:id", getTvShowById);

module.exports = tvShowRouter;
