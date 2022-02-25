import React, { useEffect, useState } from 'react'
import Details from './Details';

const List = ({editer}) => {
  const PORT = process.env.PORT || 4400;
  const [books, setBooks] = useState([]);
  const [detailId, setDetailId] = useState('');
  const [showPopup, setShowPopup] = useState(false);


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

  function deleteBook(id) {
    if (window.confirm(`Do you want to delete it?`)) {
      fetch(`http://localhost:${PORT}/book/delete/${id}`, {
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

  function opener (id) {
    setDetailId(id)
    setShowPopup(!showPopup)
  }

  function deleter (id) {
    setDetailId(id)
    deleteBook(id)
  }

  return (
    <div className='col s12'>
          <div>
            <h4 className='lighten col s3'>Title</h4>
            <h4 className='lighten col s5'>Authors</h4>
            <h4 className='lighten col s1'>Year</h4>
            <h4 className='lighten col s3'></h4>
          {/* <hr/> */}
          </div>
        <div className='col s12'>
          {books.map(book => {
            return (
              <div key={book._id} className='row'>
                <div className='col s3'>{book.title}</div>
                <div className='col s5'>{book.authors}</div>
                <div className='col s1'>{book.date}</div>
                <div className='col s3'>
                  <button
                    className='btn btn-small btn-flat dark-blue darken-4'
                    onClick={() => opener(book._id)}
                  >
                    <i className='material-icons'>info</i>
                  </button>
                  <button
                    className='btn btn-small btn-flat dark-blue darken-4'
                    style={{ marginLeft: '2px' }}
                    onClick={() => deleter(book._id)}>
                    <i className='material-icons'>delete</i>
                  </button>
                  <button
                    className='btn tn-small btn-flat dark-blue darken-4'
                    style={{ marginLeft: '2px' }}
                    onClick={() => {editer(book._id)}}
                    >
                    <i className='material-icons'>edit</i>
                  </button>
                </div>

              </div>
            )
          })}
    {showPopup
    ?<Details bookId={detailId} close={opener}/>
    : null
    }
        </div>
    </div>
  )
}
export default List