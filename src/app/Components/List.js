import React, { useEffect, useState } from 'react'

const List = () => {
  const PORT = process.env.PORT || 4400;
  const [books, setBooks] = useState([]);

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

  return (
    <div className='col s12'>
      <table>
        <thead>
          <tr>
            <th className='col s3'>Title</th>
            <th className='col s5'>Authors</th>
            <th className='col s4'>Year</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => {
            return (
              <tr key={book._id}>
                <td className='col s3'>{book.title}</td>
                <td className='col s5'>{book.authors}</td>
                <td className='col s1'>{book.date}</td>
                <td className='col s3'>
                <button className='btn btn-small btn-flat disabled dark-blue darken-4'>
                    <i className='material-icons'>info</i>
                  </button>
                  <button
                    className='btn btn-small btn-flat disabled dark-blue darken-4'
                    style={{ paddingLeft: '5px' }}>
                    <i className='material-icons'>delete</i>
                  </button>
                  <button
                    className='btn-small btn-flat disabled dark-blue darken-4'
                    style={{ paddingLeft: '5px' }}>
                    <i className='material-icons'>edit</i>
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default List