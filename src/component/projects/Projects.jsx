import React from 'react'
import './projects.css'
function Projects() {
  return (
    <div>
      <div className='container1'>
      <img className='background' src="./p2.jpg" alt="" width={1340} height={600} />
       <h1> MY PORTFOLIO</h1>
      </div>
      <div className='container2'>
       <img className='background' src="./p3.jpg" alt="" width={1340} height={600} />
       <img className='sideimg' src="./4.png" alt="" width={400} height={400}/>
       <h2>Hii Iam Akshaya</h2>
       <h3>UI Developer</h3>

      </div>
      <div className='container3'>
      <img className='background' src="./p1.jpg" alt="" width={1345} height={600} />
      <h2>Personal Detals</h2>
      <p></p>
     </div>
    </div>
  )
}

export default Projects
