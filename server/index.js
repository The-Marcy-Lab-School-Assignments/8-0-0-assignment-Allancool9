const express = require("express");

const app = express();

const serveHeader = (req, res, next) => {
  const name = req.query.name || "Allan";
  res.send(`<h1>${name} is cool</h1>`);
};

const serveColor = (req, res, next) => {
  const data = [{ color: "red" }, { color: "blue" }, { color: "Yellow" }];
  res.send(data);
};
const serveData = (req, res, next) => {
  const data = [{ name: "Allan" }, { name: "Allen" }, { name: "Alan" }];
  res.send(data);
};
const serveDiv = (req, res, next) => {
  const name = req.query.name || "Allan";
  res.send(`<h2> hey if you havent noticed this is a ${name} website </h2>`);
};
app.get("/", serveHeader);
app.get("/api/color", serveColor);
app.get("/api/data", serveData);
app.get("/div", serveDiv);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
