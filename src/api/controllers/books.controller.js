const bookMethod = {};
const Book = require('../models/books.model');


bookMethod.getBook = async (req,res) => {
    const id = req.params.id;
    const book = await Book.findById(id);
    if (book) {
        return res.status(200).json(book)
    } else {
        return res.status(400).send('Book not found.')
    }
};
bookMethod.getBooks = async (req,res) => {
    const books = await Book.find();
    if (books) {
        return res.status(200).json(books)
    } else {
        return res.status(400).send('Books not found.')
    }
};
bookMethod.createBook = async (req,res) => {
    const {name,authors,description,editorial,pages,ISBN} =  req.body;
    const book = new Book({name,authors,description,editorial,pages,ISBN})
    await Book.save()
    res.status(200).json({status: 'Book created.'})
};
bookMethod.updateBook = async (req,res) => {
    const id = req.params.id;
    const {name,authors,description,editorial,pages,ISBN} =  req.body;
    const newBook = {name,authors,description,editorial,pages,ISBN};
    await Book.findByIdAndUpdate(id, newBook)
    res.status(200).json({status: 'Book updated.'})
};
bookMethod.deleteBook = async (req,res) => {
    const id = req.params.id;
    await Book.findByIdAndRemove(id)
    res.status(200).json({status: 'Book deleted.'})
};
module.exports = bookMethod;
