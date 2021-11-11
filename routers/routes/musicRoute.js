const express = require("express");
const {
  getAllMusic,
  getMusicById,
} = require("./../controllers/MusicController");

const getAllMusicMiddleware = (req, res, next) => {
  console.log("get All musics");
  next();
};

const musicRouter = express.Router();

musicRouter.get("/", getAllMusicMiddleware, getAllMusic);

musicRouter.get("/:id", getMusicById);

module.exports = musicRouter;
