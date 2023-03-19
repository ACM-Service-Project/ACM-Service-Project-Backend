const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");
require("dotenv").config();
const db = require("./db/connection");
const { logErrorMiddlware, returnError } = require("./middleware/errorHandler");

db.then(() => {
  app
    .use(express.json())
    .use(cors())
    .use((req, res, next) => {
      res
        .setHeader(
          "Access-Control-Allow-Headers",
          "Content-Type, Authorization"
        )
        .setHeader("Content-Type", "application/json");

      next();
    })
    .use("/", require("./routes"))
    // Console logs error.
    .use(logErrorMiddlware)
    // Returns error inside the response.
    .use(returnError);
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
