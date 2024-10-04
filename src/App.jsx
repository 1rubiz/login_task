import { useState } from 'react'
import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home';
import Auth from './components/Auth';
import { Toaster } from "@/components/ui/toaster"


function App() {
    
  return (
    <BrowserRouter>
    <div className='w-full'>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      <Toaster />
    </div>
    </BrowserRouter>
      
  )
}

export default App
