import React, { useState } from 'react'
import Form from './Form'
import List from './List'


const Main = () => {
      

  return (
    <div id='main' className='row'>
      <div className='col s4'><Form/></div>
      <div className='col s8'><List/></div>
    </div>
  )
}

export default Main