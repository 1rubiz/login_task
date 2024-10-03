import { useState } from 'react'
import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home';
import Auth from './components/Auth';

function App() {
    
  return (
    <BrowserRouter>
    <div className=''>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
    </BrowserRouter>
      
  )
}

export default App
