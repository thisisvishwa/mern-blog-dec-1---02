```javascript
const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: 50
  }
});

module.exports = mongoose.model('Tag', TagSchema);
```