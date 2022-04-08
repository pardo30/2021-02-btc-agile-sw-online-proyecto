const bookMethod = {};
const Book = require('../models/books.model.ts');

const findBook = async (_fields) => {
    try {
        return Book.findOne(_fields).exec();
    } catch (error) {
        return false;
    }
};

bookMethod.getBook = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await findBook({ _id: id });
        if (book) {
            return res.status(200).json(book)
        } else {
            return res.status(400).json({ status: 'Book not found.' })
        }
    } catch (error) {
        return res.status(400).json({ status: 'There was a problem, please try again.' })
    }
};

bookMethod.getAllBooks = async (req, res) => {
    const books = await Book.find().sort({ date: -1 });
    try {
        if (books) {
            return res.status(200).json(books)
        } else {
            return res.status(400).json({ status: 'Books not found.' })
        }

    } catch (error) {
        return res.status(400).json({ status: 'There was a problem, please try again.' })
    }
};

bookMethod.createBook = async (req, res) => {
    try {
        const { title, authors, description, editorial, pages, ISBN, year } = req.body;
        if (title) {
            console.log(title)
            const checkBook = await findBook({ title: title })
            console.log(checkBook)
            if (!checkBook) {
                const book = new Book({ title, authors, description, editorial, pages, ISBN, year })
                await book.save()
                return res.status(200).send(book)
            } else {
                return res.status(400).send('Book already exists.')
            }
        }
    }
    catch {
        return res.status(400).json({ status: 'There was a problem, please try again.' })
    }
};

bookMethod.updateBook = async (req, res) => {
    const id = req.params.id;
    try {
        const { title, authors, description, editorial, pages, ISBN, year } = req.body;
        const newBook = { title, authors, description, editorial, pages, ISBN, year };
        const book = await Book.findByIdAndUpdate(id, newBook)
        return res.status(200).send(book)
    } catch (error) {
        return res.status(400).json({ status: 'There was a problem, please try again.' })
    }
};

bookMethod.deleteBook = async (req, res) => {
    const id = req.params.id;
    try {
        await Book.findByIdAndRemove(id)
        res.status(204).json({ status: 'Book deleted.' })
    } catch (error) {
        return res.status(400).json({ status: 'There was a problem, please try again.' })
    }
};

module.exports = bookMethod;
