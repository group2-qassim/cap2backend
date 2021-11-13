const fs = require("fs");
const axios = require("axios");

const getSearch = async (req, res, next) => {
  const str = req.params.str;
  const catg = req.params.catg;
  try {
    axios
      .get(`https://itunes.apple.com/search?term=${str}&media=${catg}`)
      .then((data) => {
        //console.log(data.data);

        res.status(200).json(data.data);
      })
      .catch((err) => res.send(err));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getSearch,
};
