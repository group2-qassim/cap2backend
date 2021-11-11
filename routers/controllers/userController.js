const fs = require("fs");
const ax = require("axios");

let users = [];

fs.readFile("./db/user.json", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    users = JSON.parse(data.toString());
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

module.exports = {
  login,
  sign,
};
