import React, { useEffect, useState } from 'react'

const Details = (props) => {
    const bookId = props.bookId;
    const PORT = process.env.PORT || 4400;
    const [book, setBook] = useState({})

    useEffect(() => {
        GetBook()
        console.log(bookId)
    }, [])

    function GetBook() {
        fetch(`http://localhost:${PORT}/book/getBook/${bookId}`)
            .then(res => res.json())
            .then(data => {
                setBook(data)
            })
            .catch(err => console.log(err))
    }



    return (
        <div className='row info-detail'>
            <div className='col s12'>
                <div className='card small teal darken-2'>
                    <div className='card-content white-text'>
                        <div className='card-title activator white-text text-darken-4 col s11'>{book.title}</div>
                        <button onClick={props.close} className='btn btn-flat trasparent white-text col s1 close-detail'><i className="material-icons">cancel</i>
                        </button>
                        <div className='col s12 left-align'>Authors: {book.authors}</div>
                        <div className='col s2 left-align'>Year: {book.year}</div>
                        <div className='col s2 left-align'>Pages: {book.pages}</div>
                        <div className='col s3 left-align'>ISBN: {book.ISBN}</div>
                        <div className='col s5 left-align'>Editorial: {book.editorial}</div>
                        <div className='col s12 left-align'>Description: {book.description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details