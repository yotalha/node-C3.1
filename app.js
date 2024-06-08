"use strict";
const express = require("express");
const data = require("./data");
const createError = require("http-errors");

const app = express();

app.get("/", async (req, res) => {
  const response = await data();
  res.send(response);
});

app.use((req, res, next) => {
  if (req.method !== "GET") {
    next(createError(404));
    return;
  }
  next();
});

app.listen(3000);
