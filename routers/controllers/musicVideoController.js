const fs = require("fs");
const ax = require("axios");

let musicVideo = [];

async function getUser() {
  try {
    musicVideo = await ax.get(
      "https://itunes.apple.com/search?term=all&media=musicVideo"
    );
    //console.log(movies.data);
  } catch (error) {
    console.error(error);
  }
}

getUser();

const getAllMusicVideo = (req, res) => {
  console.log(musicVideo.data);
  res.status(200).json(musicVideo.data);
};
const getMusicVideoById = (req, res) => {
  const id = req.params.id;
  const found = musicVideo.data.results.find((item) => item.trackId == id);

  res.status(200).json(found);
};

module.exports = {
  getAllMusicVideo,
  getMusicVideoById,
};
