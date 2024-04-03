import React from 'react'
import  './home.css';
<img src="" alt="" />
function Home() {
  return (
    <div className='home'>
      <div className='container1'>
      <img className='background' src="./1.jpg" alt="" width={1340} height={600} />
       <h1> MY PORTFOLIO</h1>
      </div>
      <div className='container2'>
       <img className='background' src="./2.jpg" alt="" width={1340} height={600} />
       <img className='sideimg' src="./4.png" alt="" width={400} height={400}/>
       <h2>Hii Iam Akshaya</h2>
       <h3>UI Developer</h3>

      </div>
      <div className='container3'>
      <img className='background' src="./5.jpg" alt="" width={1345} height={600} />
      <h2>Personal Detals</h2>
      <p></p>
     </div>
   
    </div>
  )
}

export default Home
