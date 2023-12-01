```javascript
const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tagController');
const auth = require('../middleware/auth');

router.post('/', auth, tagController.addTag);
router.get('/', tagController.fetchTags);
router.get('/:id', tagController.getTag);
router.put('/:id', auth, tagController.updateTag);
router.delete('/:id', auth, tagController.deleteTag);

module.exports = router;
```