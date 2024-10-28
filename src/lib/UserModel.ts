import mongoose, { Schema, model, models } from "mongoose";

// Define the User schema
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Prevent model overwrite error in development
const User = models.User || model("User", UserSchema);

export default User;
