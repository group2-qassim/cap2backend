const express = require("express");
const {
  getAllAudiobook,
  getAudiobookById,
} = require("./../controllers/audiobookController");

const getAllAudiobookMiddleware = (req, res, next) => {
  console.log("get All audiobook");
  next();
};

const audiobookRouter = express.Router();

audiobookRouter.get("/", getAllAudiobookMiddleware, getAllAudiobook);

audiobookRouter.get("/:id", getAudiobookById);

module.exports = audiobookRouter;
