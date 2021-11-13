const express = require("express");
const {
  getAllSoftware,
  getSoftwareById,
} = require("./../controllers/softwareController");

const getAllPodcastMiddleware = (req, res, next) => {
  console.log("get All software");
  next();
};

const softwareRouter = express.Router();

softwareRouter.get("/", getAllPodcastMiddleware, getAllSoftware);

softwareRouter.get("/:id", getSoftwareById);

module.exports = softwareRouter;
