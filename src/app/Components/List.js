import React, { useEffect, useState } from 'react'
import Details from './Details';

const List = () => {
  const PORT = process.env.PORT || 4400;
  const [books, setBooks] = useState([]);
  const [detailId, setDetailId] = useState('');
  const [showPopup, setShowPopup] = useState(false);


  useEffect(() => {
    GetBooks()
  }, [])

  function GetBooks() {
    fetch(`http://localhost:${PORT}/book/getAllBooks`)
      .then(res => res.json())
      .then(data => {
        setBooks(data)
      })
      .catch(err => console.log(err))
  }

  function opener (id) {
    setDetailId(id)
    setShowPopup(!showPopup)
  }

  return (
    <div className='col s12'>
          <div>
            <div className='col s3'>Title</div>
            <div className='col s5'>Authors</div>
            <div className='col s1'>Year</div>
            <div className='col s3'></div>
          </div>

        <div>
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
                    style={{ marginLeft: '2px' }}>
                    <i className='material-icons'>delete</i>
                  </button>
                  <button
                    className='btn-small btn-flat dark-blue darken-4'
                    style={{ marginLeft: '2px' }}>
                    <i className='material-icons'>edit</i>
                  </button>
                </div>

              </div>
            )
          })}
        </div>
    {showPopup
    ?<Details bookId={detailId}/>
    : null
    }
    </div>
  )
}
export default List