const fs = require("fs");
const ax = require("axios");

let all = [];

async function getUser() {
  try {
    all = await ax.get("https://itunes.apple.com/search?term=all&media=all");
    //console.log(movies.data);
  } catch (error) {
    console.error(error);
  }
}

getUser();

const getAll = (req, res) => {
  console.log(all.data);
  res.status(200).json(all.data);
};
const getAllById = (req, res) => {
  const id = req.params.id;
  const found = all.data.results.find((item) => item.collectionId == id);

  res.status(200).json(found);
};

module.exports = {
  getAll,
  getAllById,
};
