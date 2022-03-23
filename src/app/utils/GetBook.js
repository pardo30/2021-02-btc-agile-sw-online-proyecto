const PORT = process.env.PORT || 4400;

const GetBook = async (bookId) => {
    const book = await fetch(`http://localhost:${PORT}/book/getBook/${bookId}`)
        .then(res => res.json())
        .catch(err => console.log(err))
    console.log(book)
        return book

}

export { GetBook }