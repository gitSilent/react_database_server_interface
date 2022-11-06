import React, { useState } from 'react'
import classes from './AddMovingNote.module.css'

export default function AddMovingNote(props) {
    const [idBook, setIdBook] = useState()
    const [idReader, setIdReader] = useState()
    const [dateOut, setDateOut] = useState()
    const [dateRefund, setDateRefund] = useState()

    function submitForm(event){
        document.querySelector(`.${classes.form_giveBook}`).querySelectorAll('input').forEach((el)=>{
            el.value = "";
        })
        event.preventDefault()
        fetch(`http://127.0.0.1:4000/post/moving`, {
            method: "POST",
            table: "moving",
            body: JSON.stringify({
              id_book:idBook,
              id_reader: idReader,
              date_out:dateOut,
              refund_date:dateRefund
            }),
          })
            .then((data) => data)
              .then((data) => {
                  console.log(data)
                  
              });
        fetch(`http://127.0.0.1:4000/get/moving`)
        .then(val=>val.json())
        .then(val=>props.setUpdate(val))
    }
  return (
    <form action="" className={classes.form_giveBook} onSubmit={submitForm}>
        <input type="text" placeholder='ID книги' onInput={(event)=>{setIdBook(event.target.value)}}/>
        <input type="text" placeholder='ID читателя'  onInput={(event)=>{setIdReader(event.target.value)}}/>
        <input type="date" placeholder='Дата выдачи'  onInput={(event)=>{setDateOut(event.target.value)}}/>
        <input type="date" placeholder='Сдать до '  onInput={(event)=>{setDateRefund(event.target.value)}}/>
        <button >Выдать книгу</button>
    </form>
  )
}
