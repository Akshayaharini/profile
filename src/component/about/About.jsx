import React from 'react'
import './about.css';
function About() {
  return (
    <div className='about'>
      <div className='container1'>
      <img className='background' src="./a1.jpg" alt="" width={1340} height={600} />
       <h1> MY PORTFOLIO</h1>
      </div>
      <div className='container2'>
       <img className='background' src="./a2.jpg" alt="" width={1340} height={600} />
       <img className='sideimg' src="./4.png" alt="" width={400} height={400}/>
       <h2>Hii Iam Akshaya</h2>
       <h3>UI Developer</h3>

      </div>
     </div>
      
    
  )
}

export default About
