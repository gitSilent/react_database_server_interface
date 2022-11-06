import React, { useState } from 'react'
import classes from './AddBookNote.module.css'

export default function AddBookNote(props) {
    
    const [titleBook, setTitleBook] = useState()
    const [idGanre, setIdGanre] = useState()
    const [idAuthor, setIdAuthor] = useState()
    const [qtyBooks, setQtyBooks] = useState()
    

    function submitForm(event){
      document.querySelector(`.${classes.form_addBook}`).querySelectorAll('input').forEach((el)=>{
        el.value = "";
    })
        event.preventDefault()
        fetch(`http://127.0.0.1:4000/post/books`, {
            method: "POST",
            table: "books",
            body: JSON.stringify({
                title_book: titleBook,
                id_ganre: idGanre,
                id_author: idAuthor,
                qty_books: qtyBooks
            }),
          })
            .then((data) => data)
              .then((data) => {
                  console.log(data)
                  
              });
        fetch(`http://127.0.0.1:4000/get/books`)
        .then(val=>val.json())
        .then(val=>props.setUpdate(val))
    }
  return (
    <form action="" className={classes.form_addBook} onSubmit={submitForm}>
        <input type="text" placeholder='Заголовок книги' onInput={(event)=>{setTitleBook(event.target.value)}}/>
        <input type="text" placeholder='ID жанра' onInput={(event)=>{setIdGanre(event.target.value)}}/>
        <input type="text" placeholder='ID автора' onInput={(event)=>{setIdAuthor(event.target.value)}}/>
        <input type="text" placeholder='Кол-во книг'  onInput={(event)=>{setQtyBooks(event.target.value)}}/>
        
        <button>Добавить книгу</button>
    </form>
  )
}
