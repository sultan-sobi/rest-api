const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const users = require("./modals/users.models");

const userRouter = require("./routes/users.routes");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", userRouter);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use((req, res, next) => {
  res.status(500).json({
    message: "somethig broke",
  });
});

app.use((err, req, res) => {});

module.exports = app;
