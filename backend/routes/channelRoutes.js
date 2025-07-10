/**
 * @fileoverview Express router for channel-related routes in the YouTube Clone backend.
 * 
 * This file defines the API endpoints for creating, retrieving, updating, deleting,
 * and subscribing/unsubscribing to channels. It applies authentication and file upload
 * middleware where necessary.
 * 
 * Routes:
 * - POST   /           : Create a new channel (requires authentication, supports banner upload)
 * - GET    /:id        : Retrieve a channel by its ID
 * - PUT    /:id        : Update a channel by its ID (requires authentication, supports banner upload)
 * - DELETE /:id        : Delete a channel by its ID (requires authentication)
 * - POST   /:id/subscribe : Toggle subscription status for a channel (requires authentication)
 * 
 * Middleware:
 * - protect      : Ensures the user is authenticated
 * - uploadBanner : Handles banner image uploads for channels
 * 
 * Controller functions are imported from '../controllers/channelController.js'.
 */
import express from 'express';
import {
  createChannel,
  getChannel,
  updateChannel,
  deleteChannel,
  toggleSubscription
  
} from '../controllers/channelController.js';
import { protect } from '../middleware/authMiddleware.js';
import { uploadBanner } from '../middleware/multer.js';

const router = express.Router();

router.post('/', protect, uploadBanner, createChannel);
router.get('/:id', getChannel);
router.put('/:id', protect, uploadBanner, updateChannel);
router.delete('/:id', protect, deleteChannel);
router.post('/:id/subscribe', protect, toggleSubscription);



export default router;
