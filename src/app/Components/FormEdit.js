import React, { useEffect, useState } from 'react'

const FormEdit = (props) => {
    const PORT = process.env.PORT || 4400;
    const bookId = props.editId
    const [book,setBook] = useState (
        {
            title: "",
            authors: "",
            description: "",
            editorial: "",
            pages: "",
            ISBN: "",
            year: "" 
        }
    )

    useEffect(() => {
        GetBook()
    }, [])

    function GetBook() {
        fetch(`http://localhost:${PORT}/book/getBook/${bookId}`)
            .then(res => res.json())
            .then(data => {
                setBook(data)
            })
            .catch(err => console.log(err))
    }


    function handleChande(e) {
        const {name,value} = e.target;
        setBook(({...book, [name]: value}))
    }

    function EditBook(e) {
        fetch(`http://localhost:${PORT}/book/update/${bookId}`, {
            method: 'PUT',
                body: JSON.stringify(book),
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                }
        })
            .then(res=>res.json())
            .then(data => {
                window.M.toast({html: 'Book Edited'})
                console.log(data)
                setBook({
                    title: "",
                    authors: "",
                    description: "",
                    editorial: "",
                    pages: "",
                    ISBN: "",
                    year: "" 
                })
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='column'>
            <form onSubmit={EditBook}>
                <h4 className='card-title'>EDIT A BOOK</h4>
                <div className='input-field col s12'>
                    <label className='text-form'>
                        Title:
                    </label>
                    <input
                        name='title'
                        type='text'
                        placeholder='Book Title'
                        onChange={handleChande}
                        value={book.title}
                    />

                </div>
                <div className='input-field col s12'>
                    <label className='text-form'>
                        Authors:
                    </label>
                    <input
                        name='authors'
                        type='text'
                        placeholder='Authors'
                        onChange={handleChande}
                        value={book.authors}
                    />

                </div>
                <div className='input-field col s12'>
                    <label className='text-form'>
                        Editorial:
                    </label>
                    <input
                        name='editorial'
                        type='text'
                        placeholder='Editorial'
                        onChange={handleChande}
                        value={book.editorial}
                    />

                </div>
                <div className='input-field col s12'>
                    <label className='text-form'>
                        ISBN:
                    </label>
                    <input
                        name='ISBN'
                        type='text'
                        placeholder='ISBN'
                        onChange={handleChande}
                        value={book.ISBN}
                    />

                </div>
                <div className='input-field col s6'>
                    <label className='text-form'>
                        Pages number:
                    </label>
                    <input
                        name='pages'
                        type='number'
                        placeholder='Pages'
                        onChange={handleChande}
                        value={book.pages}
                    />

                </div>
                <div className='input-field col s6'>
                    <label className='text-form'>
                        Year:
                    </label>
                    <input
                        name='year'
                        type='number'
                        placeholder='Year'
                        onChange={handleChande}
                        value={book.year}
                    />
                </div>  
                <div className='input-field col s12'>
                    <label className='text-form'>
                        Description:
                    </label>
                    <textarea
                        className="materialize-textarea"
                        name='description'
                        type='textarea'
                        placeholder='Description'
                        onChange={handleChande}
                        value={book.description}
                    ></textarea>

                </div>
                <button type='submit' className='btn dark-blue btn-darken-4'>Edit</button>
            </form>
        </div>
    )
}

export default FormEdit