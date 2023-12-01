```javascript
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { TOKEN_KEY } = require('../config');

// Function to generate JWT token
const generateToken = (user) => {
  return jwt.sign({ id: user._id }, TOKEN_KEY, {
    expiresIn: '1h',
  });
};

// Function to hash password
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

// Function to compare password and hashed password
const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

module.exports = {
  generateToken,
  hashPassword,
  comparePassword,
};
```