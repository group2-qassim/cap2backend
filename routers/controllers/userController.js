const fs = require("fs");
const ax = require("axios");

let users = [];
let fav = [];
let current = {};

fs.readFile("./db/user.json", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    users = JSON.parse(data.toString());
  }
});
fs.readFile("./db/fav.json", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    fav = JSON.parse(data.toString());
  }
});

fs.readFile("./db/current.json", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    current = JSON.parse(data.toString());
  }
});

const login = (req, res) => {
  const { username, pass } = req.body;
  const found = users.find((item) => username == item.username);

  if (found) {
    if (found.pass == pass) res.status(200).send("1");
    else res.status(404).send("0");
  } else res.status(404).send("0");
};

const sign = (req, res) => {
  const { username, pass } = req.body;
  const found = users.find((item) => username == item.username);

  if (found) res.status(404).send("0");
  else {
    users.push({ username, pass });
    fs.writeFile("./db/user.json", JSON.stringify(users), (err) => {
      if (err) {
        res.status(400).json("bad request");
      } else {
        res.status(200).json(users);
      }
    });

    //res.status(200).send("1");
  }
};

const addToFav = (req, res) => {
  const { itemObj } = req.body;
  fav.push({ itemObj });
  fs.writeFile("./db/fav.json", JSON.stringify(fav), (err) => {
    if (err) {
      res.status(400).json("bad request");
    } else {
      res.status(200).json(fav);
    }
  });
};

const getFav = (req, res) => {
  res.status(200).json(fav);
};

const deleteFav = (req, res) => {
  const { itemObj } = req.body;
  fav = fav.filter((item) => item.itemObj.trackId != itemObj.trackId);
  fs.writeFile("./db/fav.json", JSON.stringify(fav), (err) => {
    if (err) {
      res.status(400).json("bad request");
    } else {
      res.status(200).json(fav);
    }
  });
};

const addToCurrent = (req, res) => {
  const { result } = req.body;
  current = { result };
  fs.writeFile("./db/current.json", JSON.stringify(current), (err) => {
    if (err) {
      res.status(400).json("bad request");
    } else {
      res.status(200).json(current);
    }
  });
};

const getCurrent = (req, res) => {
  res.status(200).json(current.result);
};

module.exports = {
  login,
  sign,
  addToFav,
  getFav,
  deleteFav,
  addToCurrent,
  getCurrent,
};
