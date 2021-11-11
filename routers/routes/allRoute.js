const express = require("express");
const { getAll, getAllById } = require("./../controllers/allController");

const getAllMiddleware = (req, res, next) => {
  console.log("get All");
  next();
};

const allRouter = express.Router();

allRouter.get("/", getAllMiddleware, getAll);

allRouter.get("/:id", getAllById);

module.exports = allRouter;
