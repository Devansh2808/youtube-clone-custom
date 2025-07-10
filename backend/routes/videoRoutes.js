
/**
 * @fileoverview Express router for handling video-related routes in the YouTube Clone backend.
 * 
 * This router manages endpoints for searching, retrieving, updating, deleting, liking, disliking,
 * uploading videos, and increasing video views. It also mounts comment-related routes for each video.
 * 
 * Middleware:
 * - `protect`: Ensures the user is authenticated for protected routes.
 * - `uploadBoth`: Handles file uploads for video and thumbnail.
 * 
 * Routes:
 * - `/search` (GET): Search for videos.
 * - `/` (GET): Get all videos.
 * - `/:id` (GET): Get a video by its ID.
 * - `/:id` (PUT): Update a video (protected, with file upload).
 * - `/:id` (DELETE): Delete a video (protected).
 * - `/:id/like` (POST): Like a video (protected).
 * - `/:id/dislike` (POST): Dislike a video (protected).
 * - `/upload` (POST): Upload a new video (protected, with file upload).
 * - `/:id/views` (PATCH): Increase the view count of a video.
 * - `/:videoId/comments`: Mounts comment routes for a specific video.
 * 
 * @module routes/videoRoutes
 */
import express from 'express';
import {
  searchVideos,
  getAllVideos,
  getVideoById,
  updateVideo,
  deleteVideo,
  likeVideo,
  dislikeVideo,
  uploadVideo,
  increaseViews,
} from '../controllers/videoController.js';
import { protect } from '../middleware/authMiddleware.js';
import commentRoutes from './commentRoutes.js';
import { uploadBoth } from '../middleware/multer.js';

const router = express.Router();

router.use('/:videoId/comments', commentRoutes);

// Main video routes
router.get('/search', searchVideos);
router.get('/', getAllVideos);
router.get('/:id', getVideoById);
router.put('/:id', protect, uploadBoth, updateVideo);
router.delete('/:id', protect, deleteVideo);
router.post('/:id/like', protect, likeVideo);
router.post('/:id/dislike', protect, dislikeVideo);
router.post('/upload', protect, uploadBoth, uploadVideo);
router.patch("/:id/views", increaseViews);


export default router;
