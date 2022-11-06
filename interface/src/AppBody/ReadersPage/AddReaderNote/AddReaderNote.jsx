import React, { useState } from 'react'
import classes from './AddReaderNote.module.css'

export default function AddReaderNote(props) {
    const [surname, setSurname] = useState()
    const [name, setName] = useState()
    const [patr, setPatr] = useState()
    const [address, setAddress] = useState()
    const [passportSeria, setPassportSeria] = useState()
    const [passportNumber, setPassportNumber] = useState()
    const [passportVydan, setPassportVydan] = useState()
    const [phone, setPhone] = useState()

    function submitForm(event){
        document.querySelector(`.${classes.form_addReader}`).querySelectorAll('input').forEach((el)=>{
            el.value = "";
        })
        event.preventDefault()
        fetch(`http://127.0.0.1:4000/post/readers`, {
            method: "POST",
            table: "readers",
            body: JSON.stringify({
              surname,
              name,
              patr,
              address,
              passport_seria: passportSeria,
              passport_number: passportNumber,
              passport_vydan: passportVydan,
              phone
            }),
          })
            .then((data) => data)
              .then((data) => {
                  console.log(data)
                  
              });
        fetch(`http://127.0.0.1:4000/get/readers`)
        .then(val=>val.json())
        .then(val=>props.setUpdate(val))
    }
  return (
    <form action="" className={classes.form_addReader} onSubmit={submitForm}>
        <input type="text" placeholder='Фамилия' onInput={(event)=>{setSurname(event.target.value)}}/>
        <input type="text" placeholder='Имя'  onInput={(event)=>{setName(event.target.value)}}/>
        <input type="text" placeholder='Отчество'  onInput={(event)=>{setPatr(event.target.value)}}/>
        <input type="text" placeholder='Адрес'  onInput={(event)=>{setAddress(event.target.value)}}/>
        <input type="text" placeholder='Серия паспорта' onInput={(event)=>{setPassportSeria(event.target.value)}}/>
        <input type="text" placeholder='Номер паспорта'  onInput={(event)=>{setPassportNumber(event.target.value)}}/>
        <input type="text" placeholder='Паспорт выдан'  onInput={(event)=>{setPassportVydan(event.target.value)}}/>
        <input type="text" placeholder='Телефон'  onInput={(event)=>{setPhone(event.target.value)}}/>
        <button >Добавить читателя</button>
    </form>
  )
}
