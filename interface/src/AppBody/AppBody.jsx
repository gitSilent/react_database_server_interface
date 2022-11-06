import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AuthorsPage from './AuthorsPage'
import BooksPage from './BooksPage'
import GanresPage from './GanresPage'
import MovingPage from './MovingPage'
import ReadersPage from './ReadersPage'

export default function AppBody() {
  return (
    <div>
        <Routes>
          <Route path='/authors' element={<AuthorsPage/>} />
          <Route path='/books' element={<BooksPage/>}  />
          <Route path='/ganres' element={<GanresPage/>}  />
          <Route path='/' element={<MovingPage/>}  />
          <Route path='/readers' element={<ReadersPage/>}  />
        </Routes>
    </div>
  )
}
