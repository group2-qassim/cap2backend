const fs = require("fs");
const ax = require("axios");

let tvShow = [];

async function getUser() {
  try {
    tvShow = await ax.get(
      "https://itunes.apple.com/search?term=all&media=tvShow"
    );
    //console.log(movies.data);
  } catch (error) {
    console.error(error);
  }
}

getUser();

const getAllTvShow = (req, res) => {
  console.log(tvShow.data);
  res.status(200).json(tvShow.data);
};
const getTvShowById = (req, res) => {
  const id = req.params.id;
  const found = tvShow.data.results.find((item) => item.collectionId == id);

  res.status(200).json(found);
};

module.exports = {
  getAllTvShow,
  getTvShowById,
};
