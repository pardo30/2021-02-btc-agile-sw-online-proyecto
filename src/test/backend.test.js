const supertest = require('supertest')
const app = require('../api/app')
const request = supertest(app)


describe('Backend endpoint test', () => {

    it('Gets status / endpoint', async ()=> {
        const res = await request.get('/');
        expect(res.status).toBe(400)
    });
})