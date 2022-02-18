import React from 'react'

const List = () => {
  const PORT = process.env.PORT || 4400;
  
  function getBooks() {
    fetch()
  }

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Authors</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    </div>
  )
}

export default List