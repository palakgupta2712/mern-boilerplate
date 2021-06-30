import express from "express";
const router = express.Router();

export function getUser(req, res) {
  res.send("GET request.");
}

export default router;
