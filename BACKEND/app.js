const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const db = require("./dbase/db.js");

const app = express();

app.get("/getAll", db.queryAll);

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server has started listening on port: ${PORT}`)
);
