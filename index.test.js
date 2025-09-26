const request = require('supertest');
const { app, close } = require('./index');

describe('GET /', () => {
    it('should return Hello World!', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Hello World!');
    }

);
}
);

describe('GET /health', () => {
    it('should return OK', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('OK');
    }
    
);
}

);

afterAll((done) => {
    close();
    done();
});
