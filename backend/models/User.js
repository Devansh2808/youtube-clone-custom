/**
 * @file Defines the Mongoose schema and model for the User entity.
 * 
 * The User schema includes the following fields:
 * - username: The user's display name (required).
 * - email: The user's email address (required, unique).
 * - password: The user's hashed password (required).
 * - profilePic: URL to the user's profile picture (optional).
 * - channels: Array of Channel ObjectIds owned by the user.
 * - subscriptions: Array of Channel ObjectIds the user is subscribed to.
 * 
 * Timestamps for creation and last update are automatically managed.
 * 
 * @module models/User
 */

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String },
    channels: [{ type: mongoose.Schema.Types.ObjectId, ref: "Channel" }],
    subscriptions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Channel",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
