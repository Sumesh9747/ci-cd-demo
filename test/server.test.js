const request = require('supertest');
const app = require('../src/server');

describe('Node.js application', () => {

    test('GET / should return application message', async () => {
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);

        expect(response.text).toBe(
            'Hello! My CI/CD Node.js application is running.'
        );
    });

});
