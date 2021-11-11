const fs = require("fs");
const ax = require("axios");

let software = [];

async function getUser() {
  try {
    software = await ax.get(
      "https://itunes.apple.com/search?term=all&media=software"
    );
    //console.log(movies.data);
  } catch (error) {
    console.error(error);
  }
}

getUser();

const getAllSoftware = (req, res) => {
  console.log(software.data);
  res.status(200).json(software.data);
};
const getSoftwareById = (req, res) => {
  const id = req.params.id;
  const found = software.data.results.find((item) => item.collectionId == id);

  res.status(200).json(found);
};

module.exports = {
  getAllSoftware,
  getSoftwareById,
};
