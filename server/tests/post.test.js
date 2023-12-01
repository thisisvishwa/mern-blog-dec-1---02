```javascript
const request = require('supertest');
const app = require('../index');
const Post = require('../models/Post');

describe('Post API', () => {
    let postId;

    beforeAll(async () => {
        await Post.deleteMany();

        const post = new Post({
            title: 'Test Post',
            content: 'This is a test post.',
            author: 'Test Author',
            categories: ['Test Category'],
            tags: ['Test Tag']
        });

        const savedPost = await post.save();
        postId = savedPost._id;
    });

    test('should create a new post', async () => {
        const res = await request(app)
            .post('/api/posts')
            .send({
                title: 'New Post',
                content: 'This is a new post.',
                author: 'New Author',
                categories: ['New Category'],
                tags: ['New Tag']
            });

        expect(res.statusCode).toEqual(201);
        expect(res.body.title).toEqual('New Post');
    });

    test('should fetch a post', async () => {
        const res = await request(app).get(`/api/posts/${postId}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual('Test Post');
    });

    test('should update a post', async () => {
        const res = await request(app)
            .put(`/api/posts/${postId}`)
            .send({
                title: 'Updated Post'
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual('Updated Post');
    });

    test('should delete a post', async () => {
        const res = await request(app).delete(`/api/posts/${postId}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual('Post deleted successfully');
    });

    afterAll(async () => {
        await Post.deleteMany();
    });
});
```