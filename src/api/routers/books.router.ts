const express = require('express');
const router = express.Router();
const { createBook, getBook, getAllBooks, updateBook, deleteBook } = require('../controllers/books.controller.ts');


router
    .post('/create', createBook)
    .get('/getBook/:id', getBook)
    .get('/getAllBooks', getAllBooks)
    .put('/update/:id', updateBook)
    .delete('/delete/:id', deleteBook)

module.exports = router;