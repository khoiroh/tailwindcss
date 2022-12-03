import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './view/About';
import CV from './view/CV';
import Navbar from './view/Navbar';


function App() {
  return (
    <>
    <Navbar/>
    <br />
   <Routes>
    <Route path='/about' element={<About/>}/>
    <Route path='/civi' element={<CV/>}/>
   </Routes>
   </>
  )
}

export default App