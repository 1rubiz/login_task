import { useState } from 'react'
import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Hmoe from './components/Home';
import Auth from './components/Auth';

function App() {

  return (
    <BrowserRouter>
    <div className=''>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={Auth/>}/>
      </Routes>
    </div>
    </BrowserRouter>
      
  )
}

export default App
