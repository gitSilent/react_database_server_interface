import React, { useEffect, useState } from 'react'
import Table from '../Table'
import AddReaderNote from './AddReaderNote/AddReaderNote'

export default function ReadersPage() {
  const [update, setUpdate] = useState([]);

  useEffect(()=>{

  },[update])
  return (
    <div>
      <AddReaderNote setUpdate={setUpdate}/>
      <Table id="readers" update={update}/>
      
    </div>
  )
}
