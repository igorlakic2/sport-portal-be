const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const categoryRoutes = require("./src/routes/categoryRoutes");

app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/categories", categoryRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode;
  const message = error.message;
  res.status(status).json({ message });
});

mongoose
  .connect(
    "mongodb+srv://igor:pass1234@sport-portal-cluster.otn87.mongodb.net/portal?retryWrites=true&w=majority&appName=sport-portal-cluster"
  )
  .then(() => app.listen(8080))
  .catch((err) => console.log(err));
