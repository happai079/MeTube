import express from 'express';
import {
	updateUser,
	deleteUser,
	getUser,
	subscribe,
	unsubscribe,
	dislike,
	like,
} from '../controllers/user.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

// Update User
router.put('/:id', verifyToken, updateUser);

// Delete User
router.delete('/:id', verifyToken, deleteUser);

// Get A User
router.get('/find/:id', getUser);

// Subscribe A User
router.put('/sub/:id', verifyToken, subscribe);

// Unsubscribe A User
router.put('/unsub/:id', verifyToken, unsubscribe);

// Like A Viedo
router.put('/like/:videoId', verifyToken, like);

// Dislike A Video
router.put('/dislike/:videoId', verifyToken, dislike);

export default router;
