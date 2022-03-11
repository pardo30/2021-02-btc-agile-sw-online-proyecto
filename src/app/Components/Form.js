import React, { useState } from 'react'

const Form = () => {
    const PORT = process.env.PORT || 4400;
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

    function handleChande(e) {
        const {name,value} = e.target;
        setBook(({...book, [name]: value}))
    }

    function AddBook(e) {
        fetch(`http://localhost:${PORT}/book/create`, {
            method: 'POST',
                body: JSON.stringify(book),
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                }
        })
            .then(res=>res.json())
            .then(data => {
                window.M.toast({html: 'Book added'})
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
            <form onSubmit={AddBook}>
                <h4 className='card-title'>ADD A BOOK</h4>
                <div className='input-field col s12'>
                    <label className='text-form'>
                        Title:
                    </label>
                    <input
                        name='title'
                        type='text'
                        className='title-form'
                        autoFocus
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
                        className='authors-form'
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
                        className='year-form'
                        placeholder='Year'
                        onChange={handleChande}
                        value={book.yaer}
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
                <button type='submit' className='btn dark-blue btn-darken-4'>Add</button>
            </form>
        </div>
    )
}

export default Form