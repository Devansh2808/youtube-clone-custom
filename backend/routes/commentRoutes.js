import express from "express";
import {
  addComment,
  deleteComment,
  editComment,
  getCommentsByVideo,
} from "../controllers/commentController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router({ mergeParams: true });

// Routes for /api/videos/:videoId/comments
router.post("/", protect, addComment);
router.get("/", getCommentsByVideo);
router.put("/:commentId", protect, editComment);
router.delete("/:commentId", protect, deleteComment);

export default router;
/*
  This file defines the routes for handling comments on videos.

  - Imports necessary modules and middleware:
    - express: Web framework for Node.js.
    - addComment, deleteComment, editComment, getCommentsByVideo: Controller functions for comment operations.
    - protect: Middleware to protect routes (authentication).

  - Creates an Express router with mergeParams enabled to access params from parent routers (e.g., videoId).

  - Defines routes:
    - POST "/" (protected): Add a new comment to a video.
    - GET "/": Retrieve all comments for a specific video.
    - PUT "/:commentId" (protected): Edit a specific comment.
    - DELETE "/:commentId" (protected): Delete a specific comment.

  - Exports the router for use in the main application.
*/