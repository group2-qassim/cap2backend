const express = require("express");
const {
  getAllPodcast,
  getPodcastById,
} = require("./../controllers/podcastController");

const getAllPodcastMiddleware = (req, res, next) => {
  console.log("get All Movies");
  next();
};

const podcastRouter = express.Router();

podcastRouter.get("/", getAllPodcastMiddleware, getAllPodcast);

podcastRouter.get("/:id", getPodcastById);

module.exports = podcastRouter;
