import React, { useState } from 'react'
import classes from './AddAuthorNote.module.css'

export default function AddAuthorNote(props) {
    
    const [nameAuthor, setNameAuthor] = useState()
    const [birthdayAuthor, setBirthdayAuthor] = useState()
    

    function submitForm(event){
      document.querySelector(`.${classes.form_addAuthor}`).querySelectorAll('input').forEach((el)=>{
        el.value = "";
    })
        event.preventDefault()
        fetch(`http://127.0.0.1:4000/post/authors`, {
            method: "POST",
            table: "authors",
            body: JSON.stringify({
                name_author: nameAuthor,
                birthday_author: birthdayAuthor
            }),
          })
            .then((data) => data)
              .then((data) => {
                  console.log(data)
                  
              });
        fetch(`http://127.0.0.1:4000/get/authors`)
        .then(val=>val.json())
        .then(val=>props.setUpdate(val))
    }
  return (
    <form action="" className={classes.form_addAuthor} onSubmit={submitForm}>
        <input type="text" placeholder='ФИО автора' onInput={(event)=>{setNameAuthor(event.target.value)}}/>
        <input type="date" placeholder='Дата рождения' onInput={(event)=>{setBirthdayAuthor(event.target.value)}}/>
       
        
        <button>Добавить автора</button>
    </form>
  )
}
