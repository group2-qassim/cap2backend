const express = require("express");
const { getSearch } = require("./../controllers/searchController");

const getSearchMiddleware = (req, res, next) => {
  console.log("get Search");
  next();
};

const searchRouter = express.Router();

searchRouter.get("/:catg/:str", getSearchMiddleware, getSearch);

module.exports = searchRouter;
