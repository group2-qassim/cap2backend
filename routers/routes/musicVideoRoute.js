const express = require("express");
const {
  getAllMusicVideo,
  getMusicVideoById,
} = require("./../controllers/musicVideoController");

const getAllMusicVideoMiddleware = (req, res, next) => {
  console.log("get All musicVideo");
  next();
};

const musicVideoRouter = express.Router();

musicVideoRouter.get("/", getAllMusicVideoMiddleware, getAllMusicVideo);

musicVideoRouter.get("/:id", getMusicVideoById);

module.exports = musicVideoRouter;
