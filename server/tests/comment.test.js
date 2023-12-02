```javascript
const request = require('supertest');
const app = require('../index');
const Comment = require('../models/Comment');
const { setupDatabase, commentOneId, commentOne } = require('./fixtures/db');

beforeEach(setupDatabase);

test('Should create comment for post', async () => {
    const response = await request(app)
        .post('/api/comments')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            postId: postOne._id,
            text: 'This is a test comment'
        })
        .expect(201);

    const comment = await Comment.findById(response.body._id);
    expect(comment).not.toBeNull();
    expect(comment.text).toEqual('This is a test comment');
});

test('Should fetch comment by ID', async () => {
    await request(app)
        .get(`/api/comments/${commentOneId}`)
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
});

test('Should not allow unauthenticated user to create comment', async () => {
    await request(app)
        .post('/api/comments')
        .send({
            postId: postOne._id,
            text: 'This is a test comment'
        })
        .expect(401);
});

test('Should delete user comment', async () => {
    await request(app)
        .delete(`/api/comments/${commentOneId}`)
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);

    const comment = await Comment.findById(commentOneId);
    expect(comment).toBeNull();
});

test('Should not delete comment if unauthenticated', async () => {
    await request(app)
        .delete(`/api/comments/${commentOneId}`)
        .send()
        .expect(401);
});

test('Should not delete other users comment', async () => {
    await request(app)
        .delete(`/api/comments/${commentOneId}`)
        .set('Authorization', `Bearer ${userTwo.tokens[0].token}`)
        .send()
        .expect(404);
});
```