```javascript
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../middleware/auth');

router.post('/create', auth, commentController.createComment);
router.get('/list', commentController.listComments);
router.get('/list/:postId', commentController.listCommentsByPost);
router.put('/update/:id', auth, commentController.updateComment);
router.delete('/delete/:id', auth, commentController.deleteComment);

module.exports = router;
```