const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    authors: {
        type: String,
        require: true,
    },
    description: {
        type: String,
    },
    editorial: {
        type: String,
    },
    pages:{
        type: Number
    },
    ISBN: {
        type: String,
    },
    date: {
        type: Date,
    }
});

bookSchema.index({name: 'text'},{name: 'textScore'});
module.exports = model('Book', bookSchema);