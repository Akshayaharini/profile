import React from 'react'
import './App.css';
import Navbar from './component/navbar/Navbar';
import Home from './component/home/Home';
import About from './component/about/About';
import Projects from './component/projects/Projects';
import Courses from './component/courses/Courses';
import Contact from './component/contact/Contact';
import Foot from './component/foot/Foot';

import { BrowserRouter,Route,Routes, } from 'react-router-dom';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Foot/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
  