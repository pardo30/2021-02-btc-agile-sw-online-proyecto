import React, { useState } from 'react'

let emptyBook = {
    title: "",
    authors: "",
    description: "",
    editorial: "",
    pages: "",
    ISBN: "",
    year: "" 
}

const Form = () => {
    const PORT = process.env.API_PORT || 4400;
    const [book,setBook] = useState (emptyBook)

    function handleChande(e) {
        const {name,value} = e.target;
        setBook(({...book, [name]: value}))
    }

    function AddBook(e) {
        if(book.title && book.authors && book.year){
        fetch(`http://localhost:${PORT}/book/create`, {
            method: 'POST',
                body: JSON.stringify(book),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                   // 'Accept': 'application/json',
                }
        })
            .then(res=>res.json())
            .then(data => {
                window.M.toast({html: 'Book added'})
                setBook(emptyBook)
            })
            .catch(err => console.log(err))
                
        }else{
            alert('Please fill in all required fields.')
        }
    }

    return (
        <div className='column'>
            <form onSubmit={AddBook}>
                <h4 className='card-title'>ADD A BOOK</h4>
                <div className='input-field col s12'>
                    <label className='text-form'>
                        Title*:
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
                        Authors*:
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
                        className='editorial-form'
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
                        className='ISBN-form'
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
                        className='pages-form'
                        placeholder='Pages'
                        onChange={handleChande}
                        value={book.pages}
                    />

                </div>
                <div className='input-field col s6'>
                    <label className='text-form'>
                        Year*:
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
                        name='description'
                        type='textarea'
                        className='materialize-textarea description-form'
                        placeholder='Description'
                        onChange={handleChande}
                        value={book.description}
                    ></textarea>

                </div>
                <button type='submit' className='btn dark-blue btn-darken-4 add-button'>Add</button>
            </form>
        </div>
    )
}

export default Form