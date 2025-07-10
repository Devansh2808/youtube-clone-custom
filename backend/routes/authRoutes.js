/**
 * @fileoverview Defines authentication-related routes for user registration, login, and profile retrieval.
 * 
 * This file sets up Express routes for handling user authentication:
 * - POST /register: Registers a new user with optional profile upload.
 * - POST /login: Authenticates a user and returns a token.
 * - GET /me: Retrieves the currently authenticated user's profile information.
 * 
 * Middleware:
 * - `uploadProfile`: Handles profile image uploads during registration.
 * - `protect`: Protects routes by requiring authentication.
 * 
 * Controllers:
 * - `registerUser`: Handles user registration logic.
 * - `loginUser`: Handles user login logic.
 * - `getMe`: Returns the authenticated user's data.
 */
import express from 'express';
import { registerUser, loginUser, getMe } from '../controllers/authController.js';
import { uploadProfile } from '../middleware/multer.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', uploadProfile, registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe); 

export default router;
