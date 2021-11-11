const fs = require("fs");
const ax = require("axios");

let podcast = [];

async function getUser() {
  try {
    podcast = await ax.get(
      "https://itunes.apple.com/search?term=all&media=podcast"
    );
    //console.log(movies.data);
  } catch (error) {
    console.error(error);
  }
}

getUser();

const getAllPodcast = (req, res) => {
  console.log(podcast.data);
  res.status(200).json(podcast.data);
};
const getPodcastById = (req, res) => {
  const id = req.params.id;
  const found = podcast.data.results.find(
    (podcast) => podcast.collectionId == id
  );

  res.status(200).json(found);
};

module.exports = {
  getAllPodcast,
  getPodcastById,
};
