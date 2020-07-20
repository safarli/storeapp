const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const history = require("connect-history-api-fallback");
dotenv.config();
const express = require("express");
const db = require("./dbase/db.js");

const app = express();

app.use(cors());
app.use(history());
app.use(express.json());
app.use(express.static("public"));

app.get("/getall", db.queryAll);
app.get("/searchbyid/:id", db.searchById);
app.post("/addproduct", db.addProduct);

// this will serve index.html file on all routes request from server (refresh or manual address bar url entry)
// request url ---> Server ---> server send index.html on any URL ---> browser accept index.html ---> use URL history ---> route to that URL internally
// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "public/index.html"));
// });

const PORT = process.env.PORT;

app.listen(PORT,  () =>
  console.log(`Server has started listening on port: ${PORT}`)
);
