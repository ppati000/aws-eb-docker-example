"use strict";
const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send(`Hello World. Follow me on <a href="https://twitter.com/ppati000">twitter.com/ppati000</a>!`);
});

app.listen(3000, "0.0.0.0", () => console.log(`Server is running on port 3000`));
