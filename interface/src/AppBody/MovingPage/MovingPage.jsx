import React, { useEffect } from 'react'
import { useState } from 'react'
import Table from '../Table'
import AddMovingNote from './AddMovingNote'
export default function MovingPage() {
  const [update, setUpdate] = useState([]);

  useEffect(()=>{

  },[update])
  return (
    <div>
      <AddMovingNote setUpdate={setUpdate}/>
      <Table id="moving" update={update} />
    </div>
  )
}
