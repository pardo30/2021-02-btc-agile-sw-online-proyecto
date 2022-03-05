const { doesNotMatch } = require('assert')
const supertest = require('supertest')
const app = require('../api/app')
const request = supertest(app)


describe('Backend endpoint test', () => {
    beforeAll(() => jest.setTimeout(10000))
    it('Gets status / endpoint', async () => {
        const res = await request.get('/');
        expect(res.status).toBe(200)
    });

    it('Get All Books', async () => {
        const res = await request.get('/book/getAllBooks');
        expect(res.status).toBe(200)
    });

    it("Post a Book", async () => {
        await request
            .post('/book/create')
            .send({ title: 'title1', year: '2005' })
            .set("Accept", "application/json")
            .expect("Content-Type", /application\/json/)
            .expect(200)
            .then(res => {
                expect(res.body).toBeDefined();
             });
    });

    it("Delete a Book", async done =>{
        const res = await request.delete(`/book//delete/${data.userId}`)
                                    .expect(204) 
        console.log("DELETE RESPONSE : ", res.body);
        done(); 
    });
})