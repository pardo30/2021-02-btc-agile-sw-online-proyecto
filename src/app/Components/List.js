import React, { useState } from 'react'
import BookDetails from './BookDetails';

const List = ({bookEditer, bookDeleter, books}) => {
  const [detailId, setDetailId] = useState('');
  const [showPopup, setShowPopup] = useState(false);


  function BookDetailsOpener (id) {
    setDetailId(id)
    setShowPopup(!showPopup)
    window.scrollTo(0,0)
  }


  return (
    <div className='col s12'>
      {showPopup
      ?<BookDetails bookId={detailId} close={BookDetailsOpener}/>
      : null
      }
          <div>
            <h4 className='lighten col s3'>Title</h4>
            <h4 className='lighten col s5'>Authors</h4>
            <h4 className='lighten col s1'>Year</h4>
            <h4 className='lighten col s3'></h4>
          </div>
        <div className='col s12'>
          {books.map(book => {
            return (
              <div key={book._id} className='row books-list'>
                <div className='col s3 title-list'>{book.title}</div>
                <div className='col s5 author-list'>{book.authors}</div>
                <div className='col s1 year-list'>{book.year}</div>
                <div className='col s3'>
                  <button
                    className='btn btn-small btn-flat dark-blue darken-4'
                    onClick={() => BookDetailsOpener(book._id)}
                  >
                    <i className='material-icons info-button'>info</i>
                  </button>
                  <button
                    className='btn btn-small btn-flat dark-blue darken-4 delete-button'
                    style={{ marginLeft: '2px' }}
                    onClick={() => bookDeleter(book._id)}>
                    <i className='material-icons'>delete</i>
                  </button>
                  <button
                    className='btn tn-small btn-flat dark-blue darken-4 edit-button'
                    style={{ marginLeft: '2px' }}
                    onClick={() => bookEditer(book._id)}>
                    <i className='material-icons'>edit</i>
                  </button>
                </div>

              </div>
            )
          })}
        </div>
    </div>
  )
}
export default List