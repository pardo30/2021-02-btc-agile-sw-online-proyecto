import React, { useEffect, useState } from 'react'
import Form from './Form'
import FormEdit from './FormEdit'
import List from './List'


const Main = () => {
  const PORT = process.env.API_PORT || 4400;
  const [editId, setEditId] = useState('');
  const [deleteId, setDeleteId] = useState('');
  const [books, setBooks] = useState([]);

  function bookEditer(editId) {
    setEditId(editId)
  }

  function bookDeleter(deleteId) {
    setDeleteId(deleteId)
    deleteBook(deleteId)
  }

  useEffect(() => {
    getBooks()
  }, [])

  function getBooks() {
    fetch(`http://localhost:${PORT}/book/getAllBooks`)
      .then(res => res.json())
      .then(data => {
        setBooks(data)
      })
      .catch(err => console.log(err))
  }

  function deleteBook(deleteId) {
    if (window.confirm(`Do you want to delete it?`)) {
      fetch(`http://localhost:${PORT}/book/delete/${deleteId}`, {
          method: 'DELETE',
          headers: {
              'Content-type': 'application/json',
              'Accept': 'application/json',
          }
      })
          .then(res => res.json())
          .then(data => {
            console.log(data)
              window.M.toast({ html: 'Book deleted' })   
          })
          .then(window.location.reload())
          .catch(err => console.error(err))
  }
  }

  return (
    <div id='main' className='row'>
      {editId
        ? <div className='col s3'><FormEdit editId={editId}/></div>
        : <div className='col s3'><Form /></div>
      }
      <div className='col s1'></div>
      <div className='col s8'>
        <List 
          editId={editId} 
          deleteId={deleteId} 
          bookEditer={bookEditer}
          bookDeleter={bookDeleter}
          books={books}/></div>
    </div>
  )
}

export default Main