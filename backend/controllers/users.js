import express from "express";
import userModel from "../models/user.model.js";

const router = express.Router();

export const getUser = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default router;
