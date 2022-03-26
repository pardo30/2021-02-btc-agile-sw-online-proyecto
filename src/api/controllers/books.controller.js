const bookMethod = {};
const Book = require('../models/books.model');

async function findBook(_fields) {
    try {
        return Book.findOne(_fields).exec();
    } catch (error) {
        return false;
    }
};

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
    const books = await Book.find().sort({date: -1});
    if (books) {
        return res.status(200).json(books)
    } else {
        return res.status(400).json({status: 'Books not found.'})
    }
};

bookMethod.createBook = async (req,res) => {
    const {title,authors,description,editorial,pages,ISBN,year} =  req.body;
    if(title){
        const checkBook = await findBook({title:title})
        if(!checkBook){
            const book = new Book({title,authors,description,editorial,pages,ISBN,year})
            await book.save()
            res.send(book)
        }else{
            return res.status(400).json({status: 'Books exists.'})
        }
        }
};

bookMethod.updateBook = async (req,res) => {
    const id = req.params.id;
    const {title,authors,description,editorial,pages,ISBN,year} =  req.body;
    const newBook = {title,authors,description,editorial,pages,ISBN,year};
    const book = await Book.findByIdAndUpdate(id, newBook)
    res.send(book)
};

bookMethod.deleteBook = async (req,res) => {
    const id = req.params.id;
    await Book.findByIdAndRemove(id)
    res.status(204).json({status: 'Book deleted.'})
};

module.exports = bookMethod;
