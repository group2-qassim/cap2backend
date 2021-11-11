const fs = require("fs");
const ax = require("axios");

let movies = [];

// fs.readFile(
//   `https://itunes.apple.com/search?term=""&media=podcast`,
//   (err, data) => {
//     if (err) {
//       console.log(err);
//       return err;
//     } else {
//       movies = JSON.parse(data.toString());
//     }
//   }
// );

// function addToFile(movies) {
//   fs.writeFile("./db/movies.json", JSON.stringify(movies), (err) => {
//     if (err) {
//       res.status(400).json("bad request");
//     } else {
//       //res.status(200).json(movies);
//     }
//   });
// }

async function getUser() {
  try {
    movies = await ax.get(
      "https://itunes.apple.com/search?term=all&media=movie"
    );
    //console.log(movies.data);
  } catch (error) {
    console.error(error);
  }
}

getUser();
//addToFile(movies);

const getAllMovies = (req, res) => {
  //addToFile(movies);
  console.log(movies.data);
  res.status(200).json(movies.data);
};
const getMovieById = (req, res) => {
  const id = req.params.id;
  const found = movies.data.results.find((movie) => movie.collectionId == id);

  res.status(200).json(found);
};

module.exports = {
  getAllMovies,
  getMovieById,
};
