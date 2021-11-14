const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
//const helmet = require("helmet");

dotenv.config();
//process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

// router
const movieRouter = require("./routers/routes/moviesRoute");
const podcastRouter = require("./routers/routes/podcastRoute");
const musicRouter = require("./routers/routes/musicRoute");
const musicVideoRouter = require("./routers/routes/musicVideoRoute");
const tvShowRouter = require("./routers/routes/tvShowRoute");
const softwareRouter = require("./routers/routes/softwareRoute");
const ebookRouter = require("./routers/routes/ebookRoute");
const allRouter = require("./routers/routes/allRoute");
const userRouter = require("./routers/routes/userRoute");
const searchRouter = require("./routers/routes/searchRoute");

const app = express();

//app level middleware
app.use(express.json());
const appMiddleware = (req, res, next) => {
  console.log("appMiddleware");
  next();
};
app.use(appMiddleware);
app.use(cors());
//app.use(helmet());
app.use(morgan("dev"));

// router level middleware
const movieMiddleware = (req, res, next) => {
  console.log("movies");
  next();
};

const podcastMiddleware = (req, res, next) => {
  console.log("podcast");
  next();
};

const musicMiddleware = (req, res, next) => {
  console.log("music");
  next();
};

const musicVideoMiddleware = (req, res, next) => {
  console.log("musicVideo");
  next();
};

const tvShowMiddleware = (req, res, next) => {
  console.log("tvShow");
  next();
};

const softwareMiddleware = (req, res, next) => {
  console.log("software");
  next();
};

const ebookMiddleware = (req, res, next) => {
  console.log("ebook");
  next();
};

const allMiddleware = (req, res, next) => {
  console.log("all");
  next();
};

const userMiddleware = (req, res, next) => {
  console.log("user");
  next();
};

const searchMiddleware = (req, res, next) => {
  console.log("search");
  next();
};

//third party middleware

//routers level middleware
app.use("/movies", movieMiddleware, movieRouter);
app.use("/podcast", podcastMiddleware, podcastRouter);
app.use("/music", musicMiddleware, musicRouter);
app.use("/musicVideo", musicVideoMiddleware, musicVideoRouter);
app.use("/tvShow", tvShowMiddleware, tvShowRouter);
app.use("/software", softwareMiddleware, softwareRouter);
app.use("/ebook", ebookMiddleware, ebookRouter);
app.use("/all", allMiddleware, allRouter);
app.use("/user", userMiddleware, userRouter);
app.use("/search", searchMiddleware, searchRouter);

//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// if (process.env.NODE_ENV) {
//   app.use(express.static(path.resolve(process.cwd(), "client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(process.cwd(), "client/build/index.html"));
//   });
// }

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
