const supertest = require('supertest')
const app = require('../api/app')
const request = supertest(app)
const Book = require('../api/models/books.model');


describe('Backend endpoint test', () => {
    beforeAll(() => jest.setTimeout(10000))
    afterEach(() => Book.deleteMany())
    

    it('Get all books', async () => {
        await request
        .get('/book/getAllBooks')
        .set('Accept', 'application/json')
        .expect('Content-Type', /application\/json/)
        .then((response) => {
            expect(response.status).toBe(200)
            // Check response is an array
            expect(Array.isArray(response.body)).toBeTruthy()   
        })
    });

    it('Get a book', async () => {
        const book = await Book.create({
            title: 'Title 1',
            authors: 'Author 1',
            year: 2022,
        })
        const bookId = book.id
        await request
            .get('/book/getBook/' + bookId)
            .set('Accept', 'application/json')
            .expect('Content-Type', /application\/json/)
            .expect(200)
            .then((response) => {
                // Check the response
                expect(response.body._id).toBe(book.id)
                expect(response.body.title).toBe(book.title)
                expect(response.body.year).toBe(book.year)
            })
    });



    it('Post a Book', async () => {
        const data = { 
            title: 'Title 2',
            authors: 'Author 2',
            year: 2022
        }
        await request
            .post('/book/create')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /application\/json/)
            .expect(200)
            .then(async (response) => {
                // Check the response
                expect(response.body._id).toBeTruthy()
                // Check the data in the database
                const book = await Book.findOne({ _id: response.body._id })
                expect(book).toBeTruthy()
                expect(book.title).toBe(data.title)
                expect(book.authors).toBe(data.authors)
                expect(book.year).toBe(data.year)
            })
    });

    it('Update a book', async () => {
        const originalBook = await Book.create({
            title: 'Title 3',
            authors: 'Author 3',
            year: 2022
        })
        const bookId = originalBook.id
        const data = {
            title: 'Title 2',
            authors: 'Author 2',
            year: 2019
        }
    
        await request
            .put('/book/update/' + bookId)
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /application\/json/)
            .expect(200)
            .then(async (response) => {
                // Check the response
                expect(response.body._id).toBe(originalBook.id)   
                // Check the data in the database
                const newBook = await Book.findOne({ _id: response.body._id })
                expect(newBook).toBeTruthy()
                expect(newBook.title).toBe(data.title)
                expect(newBook.authors).toBe(data.authors)
                expect(newBook.year).toBe(data.year)
            })
    });

    it('Delete a Book', async () =>{
        const book = await Book.create({
            title: 'Title 4',
            authors: 'Author 4',
            year: 2022
        })
        const bookId = book.id
        await request
        .delete('/book/delete/' + bookId)
		.expect(204)
		.then(async () => {
            // Check the data doesn't exist in the database
			expect(await Book.findOne({ _id: bookId })).toBeFalsy()
		})
})
})