import React, { useState } from 'react'
import classes from './AddGanreNote.module.css'

export default function AddGanreNote(props) {
    
    const [nameGanre, setNameGanre] = useState()
    const [descGanre, setDescGanre] = useState()
   

    function submitForm(event){
        document.querySelector(`.${classes.form_addGanre}`).querySelectorAll('input').forEach((el)=>{
            el.value = "";
        })
        event.preventDefault()
        fetch(`http://127.0.0.1:4000/post/ganre`, {
            method: "POST",
            table: "ganre",
            body: JSON.stringify({
               ganre_name: nameGanre,
               ganre_desc: descGanre
            }),
          })
            .then((data) => data)
              .then((data) => {
                  console.log(data)
                  
              });
        fetch(`http://127.0.0.1:4000/get/ganre`)
        .then(val=>val.json())
        .then(val=>props.setUpdate(val))
    }
  return (
    <form action="" className={classes.form_addGanre} onSubmit={submitForm}>
        <input type="text" placeholder='Название жанра' onInput={(event)=>{setNameGanre(event.target.value)}}/>
        <input type="text" placeholder='Описание жанра' onInput={(event)=>{setDescGanre(event.target.value)}}/>
        
        <button>Добавить книгу</button>
    </form>
  )
}
