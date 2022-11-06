import React, { useEffect, useState } from 'react'
import Table from '../Table'
import AddAuthorNote from './AddAuthorNote'

export default function AuthorsPage() {
  const [update, setUpdate] = useState([]);

  useEffect(()=>{

  },[update])
  return (
    <div>
      <AddAuthorNote setUpdate={setUpdate}/>
      <Table id="authors" update={update} />
    </div>
    )
}
