const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

//Connecting to the database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MONGODB database connection established.");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
