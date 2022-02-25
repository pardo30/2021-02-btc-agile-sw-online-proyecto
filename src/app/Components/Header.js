import React from 'react'

const Header = () => {
  return (
    <div id='Header'>
      <nav className="teal darken-3">
        <div className="container">
          <div className="nav-wrapper left-align">
            <a href="#" className="brand-logo">My Personal Book Collection</a>
          </div>
          <div className='right-align'>Search</div>
        </div>
      </nav>
    </div>
  )
}

export default Header