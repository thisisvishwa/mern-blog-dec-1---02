```javascript
const request = require('supertest');
const app = require('../index');
const User = require('../models/User');
const { registerUser } = require('../controllers/userController');

describe('User Registration', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        name: 'Test User',
        email: 'testuser@gmail.com',
        password: 'testpassword'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('user');
  });

  it('should not create a user with already existing email', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        name: 'Test User',
        email: 'testuser@gmail.com',
        password: 'testpassword'
      });
    expect(res.statusCode).toEqual(400);
  });

  afterAll(async () => {
    await User.remove();
  });
});

describe('User Authentication', () => {
  it('should authenticate a user', async () => {
    const res = await request(app)
      .post('/api/auth')
      .send({
        email: 'testuser@gmail.com',
        password: 'testpassword'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should not authenticate a user with incorrect credentials', async () => {
    const res = await request(app)
      .post('/api/auth')
      .send({
        email: 'testuser@gmail.com',
        password: 'wrongpassword'
      });
    expect(res.statusCode).toEqual(401);
  });
});
```