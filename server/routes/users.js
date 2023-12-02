```javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// Register a new user
router.post('/register', userController.registerUser);

// Authenticate a user
router.post('/login', userController.authenticateUser);

// Get user profile
router.get('/profile', auth, userController.getProfile);

// Update user profile
router.put('/profile', auth, userController.updateProfile);

// Update user settings
router.put('/settings', auth, userController.updateSettings);

// Get all users (admin only)
router.get('/', auth, userController.getAllUsers);

// Get a user by ID (admin only)
router.get('/:id', auth, userController.getUserById);

// Update a user (admin only)
router.put('/:id', auth, userController.updateUser);

// Delete a user (admin only)
router.delete('/:id', auth, userController.deleteUser);

module.exports = router;
```