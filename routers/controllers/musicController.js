const fs = require("fs");
const ax = require("axios");

let music = [];

async function getUser() {
  try {
    music = await ax.get(
      "https://itunes.apple.com/search?term=all&media=music"
    );
    //console.log(movies.data);
  } catch (error) {
    console.error(error);
  }
}

getUser();

const getAllMusic = (req, res) => {
  console.log(music.data);
  res.status(200).json(music.data);
};
const getMusicById = (req, res) => {
  const id = req.params.id;
  const found = music.data.results.find((music) => music.trackId == id);

  res.status(200).json(found);
};

module.exports = {
  getAllMusic,
  getMusicById,
};
