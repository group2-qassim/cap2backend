const fs = require("fs");
const axios = require("axios");

const getSearch = async (req, res, next) => {
  const { str, catg } = req.body;
  try {
    axios
      .get(
        `https://itunes.apple.com/search?term=${str}&media=${catg}&callback=wsSearchCB`
      )
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
