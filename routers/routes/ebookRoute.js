const express = require("express");
const {
  getAllEbook,
  getEbookById,
} = require("./../controllers/EbookController");

const getAllEbookMiddleware = (req, res, next) => {
  console.log("get All ebook");
  next();
};

const ebookRouter = express.Router();

ebookRouter.get("/", getAllEbookMiddleware, getAllEbook);

ebookRouter.get("/:id", getEbookById);

module.exports = ebookRouter;
