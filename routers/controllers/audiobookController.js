const fs = require("fs");
const ax = require("axios");

let audiobook = [];

async function getUser() {
  try {
    audiobook = await ax.get(
      "https://itunes.apple.com/search?term=all&media=audiobook"
    );
    //console.log(movies.data);
  } catch (error) {
    console.error(error);
  }
}

getUser();

const getAllAudiobook = (req, res) => {
  console.log(audiobook.data);
  res.status(200).json(audiobook.data);
};
const getAudiobookById = (req, res) => {
  const id = req.params.id;
  const found = audiobook.data.results.find((item) => item.collectionId == id);

  res.status(200).json(found);
};

module.exports = {
  getAllAudiobook,
  getAudiobookById,
};
