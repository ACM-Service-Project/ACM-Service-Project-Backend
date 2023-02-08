const express = require("express");
const app = express();
const PORT = 3000;
require("dotenv").config();
const db = require("./db/connection")

db.then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
 })
