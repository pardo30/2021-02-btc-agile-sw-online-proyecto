import React, { useEffect, useState } from 'react'
import { GetBook } from '../utils/GetBook';

const BookDetails = (props) => {
    const bookId = props.bookId;
    const [book, setBook] = useState({})

    useEffect(()=> {
        editbook(bookId)
    },[bookId])

    const editbook = async bookId => {
        const data = await GetBook(bookId)
        console.log(data)
        setBook(data)
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

export default BookDetails