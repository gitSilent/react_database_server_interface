import React, { useEffect, useState } from 'react'
import Table from '../Table'
import AddBookNote from './AddBookNote'

export default function BooksPage() {
  const [update, setUpdate] = useState([]);

  useEffect(()=>{

  },[update])
  return (
    <div>
      <AddBookNote setUpdate={setUpdate}/>
      <Table id="books" update={update} />
      
    </div>
  )
}
