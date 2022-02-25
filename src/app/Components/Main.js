import React, { useState } from 'react'
import Form from './Form'
import FormEdit from './FormEdit'
import List from './List'


const Main = () => {
  const [editId, setEditId] = useState('');

  function handleCallBack(editId) {
    setEditId(editId)
  }


  return (
    <div id='main' className='row'>
      {editId
        ? <div className='col s3'><FormEdit editId={editId}/></div>
        : <div className='col s3'><Form /></div>
      }
      <div className='col s1'></div>
      <div className='col s8'><List editId={editId} editer={handleCallBack}/></div>
    </div>
  )
}

export default Main