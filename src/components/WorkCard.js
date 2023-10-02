import './WorkCardStyle.css'
// import '../index.css'
import React from 'react'
import news from '../assests/news.jpg'
import { NavLink } from 'react-router-dom'
const WorkCard = () => {
  return (

    <div className="project-container">
             
    <div className="project-card">
    <img src={props.imgsrc} alt="img not found"  />
        <h2 className='project-title'>
            project title
        </h2>
        <div className="pro-details">
            <p>this is text</p>
      
        <div className="pro-btns">
            <NavLink to="url.com" className="btn">
                 view
             </NavLink>

       
        <NavLink to="url.com" className="btn">source </NavLink>
      </div>
    </div>
    </div>

 </div>
  )
}

export default WorkCard
