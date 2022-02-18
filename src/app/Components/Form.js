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
            date: "" 
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
                    date: "" 
                })
            })
            .catch(err => console.log(err))
        e.preventDefault()
    }

    return (
        <div className='column'>
            <form onSubmit={AddBook}>
                <div className='card-title'>ADD A BOOK</div>
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
                        name='date'
                        type='number'
                        placeholder='Year'
                        onChange={handleChande}
                        value={book.date}
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