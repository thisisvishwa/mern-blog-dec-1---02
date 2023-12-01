```javascript
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authenticateUser, authorizeUser } = require('../middleware/auth');

router.post('/register', authController.registerUser);
router.post('/login', authController.authenticateUser);
router.get('/logout', authenticateUser, authController.logoutUser);
router.get('/refresh-token', authenticateUser, authController.refreshToken);
router.get('/profile', authenticateUser, authController.getUserProfile);
router.put('/profile', authenticateUser, authController.updateProfile);
router.put('/change-password', authenticateUser, authController.changePassword);
router.get('/users', authenticateUser, authorizeUser('admin'), authController.getUsers);
router.put('/users/:id', authenticateUser, authorizeUser('admin'), authController.updateUser);
router.delete('/users/:id', authenticateUser, authorizeUser('admin'), authController.deleteUser);

module.exports = router;
```