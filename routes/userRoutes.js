import express from 'express';
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  deleteUser,
  getUserById,
  editUserByAdmin,
} from '../controllers/userController.js';
import { protect, adminProtect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser).get(protect, adminProtect, getAllUsers);

router.post('/login', authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route('/:id')
  .delete(protect, adminProtect, deleteUser)
  .get(protect, adminProtect, getUserById)
  .put(protect, adminProtect, editUserByAdmin);

export default router;
