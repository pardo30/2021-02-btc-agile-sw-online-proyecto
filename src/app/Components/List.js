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
            <th>Title</th>
            <th>Authors</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => {
            return (
              <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.authors}</td>
                <td>{book.date}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default List