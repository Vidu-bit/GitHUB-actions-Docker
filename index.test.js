const request = require('supertest');
const { app, close } = require('./index');

describe('Test all endpoint API', ()=> {
    it('GET / should return Hello World', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual('Hello World!');
    });

    it('GET /health should return OK', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual('OK');
    }); 

    afterAll((done) => {
    close();
    done();
});
});


