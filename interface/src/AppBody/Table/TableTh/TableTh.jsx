import React, { useEffect } from 'react'
import { useState } from 'react';

export default function TableTh(props) {
    const [values, setValues] = useState([])
    let valuesVar = [];
    useEffect(()=>{
        console.log(props)
        Object.entries(props.th_val).forEach((el)=>{
            console.log(el[1])
            valuesVar.push(el[1])
        })
        setValues(valuesVar)
    },[])
  return (
    <tr>
        {
            values.map((el)=>(
                <th>{el}</th>
            ))
        }
    </tr>
  )
}
