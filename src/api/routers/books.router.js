const express = require('express');
const router = express.Router();
const { createBook, getBook, getBooks, updateBook, deleteBook } = require('../controllers/books.controller');


router
    .post('/create', createBook)
    .get('/getbook/:id', getBook)
    .get('/getAllItems', getBooks)
    .put('/update:/id', updateBook)
    .delete('/delete/:id', deleteBook)

module.exports = router;