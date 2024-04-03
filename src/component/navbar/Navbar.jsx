import React from 'react'
import './navbar.css'
import Home from '../home/Home'
import About from '../about/About'
import Projects from '../projects/Projects'
import Courses from '../courses/Courses'
import Contact from '../contact/Contact'

function Navbar() {
  return (
    <div className='navbar'  >
      <div className='navbar-border'>
     <button className='home' ><a href="/">Home</a></button>
     <button className='about' ><a href="/about">About</a></button>
     <button className='projects'><a href='/projects'>Projects</a></button>
     <button className='courses'><a href='/courses'>Courses</a></button>
     <button className='contact'><a href="/contact">Contact</a></button>
     </div>
    </div>
  )
}

export default Navbar
