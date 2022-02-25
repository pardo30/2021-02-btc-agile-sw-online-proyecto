const bookMethod = {};
const Book = require('../models/books.model');


bookMethod.getBook = async (req,res) => {
    const id = req.params.id;
    const book = await Book.findById(id);
    if (book) {
        return res.status(200).json(book)
    } else {
        return res.status(400).json({status:'Book not found.'})
    }
};

bookMethod.getAllBooks = async (req,res) => {
    const books = await Book.find();
    if (books) {
        return res.status(200).json(books)
    } else {
        return res.status(400).json({status: 'Books not found.'})
    }
};

bookMethod.createBook = async (req,res) => {
    const {title,authors,description,editorial,pages,ISBN,year} =  req.body;
    const book = new Book({title,authors,description,editorial,pages,ISBN,year})
    await book.save()
    res.status(200).json({status: 'Book created.'})
};

bookMethod.updateBook = async (req,res) => {
    const id = req.params.id;
    const {title,authors,description,editorial,pages,ISBN,year} =  req.body;
    const newBook = {title,authors,description,editorial,pages,ISBN,year};
    await Book.findByIdAndUpdate(id, newBook)
    res.status(200).json({status: 'Book updated.'})
};

bookMethod.deleteBook = async (req,res) => {
    const id = req.params.id;
    await Book.findByIdAndRemove(id)
    res.status(200).json({status: 'Book deleted.'})
};

module.exports = bookMethod;
