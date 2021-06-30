import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  age: Number,
  createdAt: { type: Date, default: new Date() },
});

export default mongoose.model("User", userSchema);
