import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import TableTh from './TableTh'
import classes from './Table.module.css'

export default function Table(props) {
    
    const [headerFields, setHeaderFields] = useState([])
    const [notes, setNotes] = useState([])

    // useEffect(()=>{
    //     fetch(`http://127.0.0.1:4000/get/${props.id}`,)
    //     .then((val) => val.json())
    //     .then((val)=>{
    //         setNotes(val)
    //     })
    // },[])

    useEffect(()=>{
        fetch(`http://127.0.0.1:4000/get/${props.id}`,)
        .then((val) => val.json())
        .then((val)=>{
            setNotes(val)
        })
    },[props.update])

    useEffect(()=>{
        if(notes.length != 0){
            let newArr = [];
            Object.entries(notes[0]).forEach((el,index)=>{
                    newArr.push(el[0])
                })
            setHeaderFields(newArr)
        }
    },[notes])

    useEffect(()=>{
        console.log(headerFields)
    },[headerFields])

    // useEffect(()=>{
    //     Object.entries(notes[0]).forEach((el,index)=>{
    //         setHeaderFields(...headerFields, el[0])
    //     })
    //     console.log(headerFields)
    // },[notes])

  return (
    <div className={classes.div_table}>
            <table className={classes.table}>
                <thead>
                    <tr>
                        {
                           headerFields.map((el)=>(
                                <th>{el}</th>
                           ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        notes.map((val,index)=>(
                            <TableTh th_val={val}>
                                
                            </TableTh>   
                        ))
                    }
                </tbody>
            </table>
            
    </div>
  )
}
