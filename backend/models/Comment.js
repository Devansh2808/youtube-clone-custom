/**
 * Mongoose schema for the Comment model.
 *
 * Represents a comment made by a user on a video.
 *
 * @typedef {Object} Comment
 * @property {string} text - The content of the comment.
 * @property {mongoose.Types.ObjectId} author - Reference to the User who made the comment.
 * @property {mongoose.Types.ObjectId} video - Reference to the Video the comment belongs to.
 * @property {Date} createdAt - Timestamp when the comment was created.
 * @property {Date} updatedAt - Timestamp when the comment was last updated.
 */
import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  video: { type: mongoose.Schema.Types.ObjectId, ref: "Video", required: true },
}, { timestamps: true });

export default mongoose.model("Comment", commentSchema);


