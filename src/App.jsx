import { useState } from 'react'
import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home';
import Auth from './components/Auth';

function App() {
    const [isUser, setIsUser] = useState(false)
  return (
    <BrowserRouter>
    <div className=''>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/home' element={Home state={isUser}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
      
  )
}

export default App
