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
        <div className='row'>
            <div className='col s12'>
                <div className='card blue-grey darken-1'>
                    <div className='card-content white-text'>
                        <span className='card-title activator white-text text-darken-4'>{book.title}<i class="material-icons right">control_point</i></span>
                        <div className="card-content">
                            <div>{book.authors}</div>
                            <div>{book.date}</div>
                        </div>
                    </div>
                        <div className='card-reveal left-align'>
                            <div className='card-title activator grey-text text-darken-4 col s12'>{book.title}<i class="material-icons right">cancel</i></div>
                            <div className='col s8'>Authors: {book.authors}</div>
                            <div className='col s4'>Year: {book.date}</div>
                            <div className='col s3'>Pages: {book.pages}</div>
                            <div className='col s3'>ISBN: {book.ISBN}</div>
                            <div className='col s12'>Editorial: {book.editorial}</div>
                            <div className='col s12'>Description: {book.description}</div>
                        </div>
                </div>
            </div>
            </div>
            )
}

            export default Details