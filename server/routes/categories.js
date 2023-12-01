```javascript
const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const auth = require('../middleware/auth');

router.post('/', auth, categoryController.addCategory);
router.get('/', categoryController.fetchCategories);
router.get('/:id', categoryController.getCategoryById);
router.put('/:id', auth, categoryController.updateCategory);
router.delete('/:id', auth, categoryController.deleteCategory);

module.exports = router;
```