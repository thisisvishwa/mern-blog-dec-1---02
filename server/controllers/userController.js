```javascript
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { TOKEN_KEY } = require('../utils/constants');

exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        username,
        email,
        password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
};

exports.authenticateUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).json({ error: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(400).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id }, TOKEN_KEY, { expiresIn: '1h' });

    res.status(200).json({ token });
};

exports.authorizeUser = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(403).json({ error: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, TOKEN_KEY);
        req.userId = decoded.id;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
};

exports.updateProfile = async (req, res) => {
    const { username, email } = req.body;
    const userId = req.userId;

    const user = await User.findById(userId);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    user.username = username || user.username;
    user.email = email || user.email;

    await user.save();

    res.status(200).json({ message: 'Profile updated successfully' });
};

exports.updateSettings = async (req, res) => {
    const { theme, layout } = req.body;
    const userId = req.userId;

    const user = await User.findById(userId);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    user.settings.theme = theme || user.settings.theme;
    user.settings.layout = layout || user.settings.layout;

    await user.save();

    res.status(200).json({ message: 'Settings updated successfully' });
};
```