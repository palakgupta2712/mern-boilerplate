import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(json());

const port = process.env.PORT || 5000;

// Setting up routes for
app.use("/users", userRoutes);

//Connecting to the database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MONGODB database connection established.");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
