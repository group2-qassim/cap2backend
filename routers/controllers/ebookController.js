const fs = require("fs");
const ax = require("axios");

let ebook = [];

async function getUser() {
  try {
    ebook = await ax.get(
      "https://itunes.apple.com/search?term=all&media=ebook"
    );
    //console.log(movies.data);
  } catch (error) {
    console.error(error);
  }
}

getUser();

const getAllEbook = (req, res) => {
  console.log(ebook.data);
  res.status(200).json(ebook.data);
};
const getEbookById = (req, res) => {
  const id = req.params.id;
  const found = ebook.data.results.find((item) => item.trackId == id);

  res.status(200).json(found);
};

module.exports = {
  getAllEbook,
  getEbookById,
};
