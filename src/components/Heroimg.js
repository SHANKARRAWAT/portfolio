import './HeroimgStyle.css';
 import React from 'react'
 import intro from'../assests/intro.jpg'
 import {Link} from 'react-router-dom'
 const Heroimg = () => {
   return (
     <div className='hero'>
         
         <div className='mask'>
            <img  className="intro-img" src={intro} alt="" />
         </div>
         <div className="content">
            <p>Hi, I am Shankar Rawat</p>
            <h1>web developer.</h1>
            <div>
                <Link to="/project" className='btn'>projects</Link>

                <Link to="/project" className='btn btn-light'>contact</Link>
            </div>
         </div>
     </div>
   )
 }
 
 export default Heroimg
 