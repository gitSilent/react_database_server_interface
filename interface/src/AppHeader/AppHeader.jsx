import React from 'react'
import { useNavigate } from 'react-router'
import classes from'./AppHeader.module.css'

export default function AppHeader() {
    const navigate = useNavigate();
  return (
    <div className={classes.div_header}>
        <button onClick={()=>{navigate('/')}}>На главную</button>
        <button onClick={()=>{navigate('/authors')}}>Авторы</button>
        <button onClick={()=>{navigate('/books')}}>Книги</button>
        <button onClick={()=>{navigate('/ganres')}}>Жанры</button>
        <button onClick={()=>{navigate('/readers')}}>Читатели</button>
    </div>
  )
}
