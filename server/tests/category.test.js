```javascript
const request = require('supertest');
const app = require('../index');
const Category = require('../models/Category');

describe('Category API', () => {
    let categoryId;

    beforeAll(async () => {
        await Category.deleteMany();

        const category = new Category({ name: 'Test Category' });
        categoryId = category._id;
        await category.save();
    });

    test('Should fetch all categories', async () => {
        const res = await request(app).get('/api/categories');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('categories');
    });

    test('Should fetch a single category', async () => {
        const res = await request(app).get(`/api/categories/${categoryId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('category');
        expect(res.body.category._id).toEqual(categoryId.toString());
    });

    test('Should create a new category', async () => {
        const res = await request(app)
            .post('/api/categories')
            .send({
                name: 'New Category'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('category');
        expect(res.body.category.name).toEqual('New Category');
    });

    test('Should update a category', async () => {
        const res = await request(app)
            .put(`/api/categories/${categoryId}`)
            .send({
                name: 'Updated Category'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('category');
        expect(res.body.category.name).toEqual('Updated Category');
    });

    test('Should delete a category', async () => {
        const res = await request(app).delete(`/api/categories/${categoryId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Category deleted');
    });
});
```