```javascript
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  TOKEN_KEY: process.env.TOKEN_KEY || 'token',
  API_URL: process.env.API_URL || 'http://localhost:5000/api',
};
```