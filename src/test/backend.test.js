const supertest = require('supertest')
const app = require('../api/app')
const request = supertest(app)
const temporalData = require('./temporalData.json')
const fs = require('fs');
const { send } = require('process');
let bookID;
const Book = require('../api/models/books.model');


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

    it('Post a Book', async () => {
        const data = { 
            title: 'title3', 
            year: 2007 
        }
        await request
            .post('/book/create')
            .send(data)
            .set("Accept", "application/json")
            .expect("Content-Type", /application\/json/)
            .expect(200)
            .then(async (response) => {
                // Check the response
                expect(response.body._id).toBeTruthy()
                // expect(response.body.title).toBe(data.title)
                // expect(response.body.year).toBe(data.year)
                bookId = response.body._id
                // Check the data in the database
                const book = await Book.findOne({ _id: response.body._id })
                expect(book).toBeTruthy()
                expect(book.title).toBe(data.title)
                expect(book.content).toBe(data.content)
            })
    });

    it('Update a book', async () => {
        const originalBook = await Book.create({
            title: "Title 1",
            year: 2019,
        })
        const bookId = originalBook.id
        console.log(bookId)
        const data = {
            title: "New Title",
            year: 2020,
        }
    
        await request
            .put('/book/update/' + bookId)
            .send(data)
            .set("Accept", "application/json")
            .expect("Content-Type", /application\/json/)
            .expect(200)
            .then(async (response) => {
                // Check the response
                expect(response.body._id).toBe(originalBook.id)
                //expect(response.body.title).toBe(data.title)
                //expect(response.body.year).toBe(data.year)
    
                // Check the data in the database
                const newBook = await Book.findOne({ _id: response.body._id })
                expect(newBook).toBeTruthy()
                expect(newBook.title).toBe(data.title)
                expect(newBook.year).toBe(data.year)
            })
    })
    // it("Delete a Book", async () =>{
        // const book = await Book.create({
        //     title: "Title 1",
        //     year: 2019,
        // })
        // const bookId = book.id
        // .delete("/book/delete/" + bookId)
		// .expect(204)
		// .then(async () => {
		// 	expect(await Book.findOne({ _id: bookId })).toBeFalsy()
		// })
})