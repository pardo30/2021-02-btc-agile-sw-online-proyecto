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


    // it("Get All Books", async done => {
    //     await request
    //         .get('/book/getAllBooks')
    //         // .set("Accept", "application/json")
    //         // .expect("Content-Type", /application\/json/)
    //         .expect(200, done);
    // });
    it("Post a Book", async () => {
        await request
            .post('/book/create')
            .send({ title: 'title1', year: '2005' })
            .set("Accept", "application/json")
            .expect("Content-Type", /application\/json/)
            .expect(200)
            // .end((err, res) => {
            //     res.status.should.equal(200);
            //     res.body.success.should.equal(true);
            //     done();
            // });
            // .end((err, res) => {
            //     if (err) {
            //      reject(new Error('An error occured with the payment service, err: ' + err))
            //     }
            //     resolve(res.body)
            //    })
    })
})