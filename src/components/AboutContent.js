import './AboutContentStyle.css'

import web from '../assests/web.jpg'
import code from '../assests/codereact.jpg'
 import React from 'react'
import {Link} from 'react-router-dom'
const AboutContent = () => {
  return (
    <div className='about'>
     <div className="left">
        <h1>Who I am ?</h1>
        <p>Full-Stack Developer with hands-on experience building scalable web apps using the MERN stack and Java. I specialize in crafting clean React interfaces, secure RESTful APIs, and optimized databases backed by strong CS fundamentals </p>
    
        <Link to='/contact'> 
         <button className='btn'>Contact</button>
         </Link>
         </div>
     <div className="right">
    <div className="img-container">
        <div className="img-stack bottom">
            <img src={web} className='img' alt="not found" />
        </div>
        <div className="img-stack top">
            <img src={code} className='img' alt="not found" />
        </div>
    </div>
     </div>
      
    </div>
  )
}

export default AboutContent
