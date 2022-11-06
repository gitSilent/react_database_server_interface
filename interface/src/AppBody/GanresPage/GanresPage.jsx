import React, { useEffect, useState } from 'react'
import Table from '../Table'
import AddGanreNote from './AddGanreNote';


export default function GanresPage() {
  const [update, setUpdate] = useState([]);

  useEffect(()=>{

  },[update])
  return (
    <div>
      <AddGanreNote setUpdate={setUpdate}/>
      <Table id="ganre" update={update}/>
      
    </div>
  )
}
