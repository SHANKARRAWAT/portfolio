import './WorkCardStyle.css'
// import '../index.css'
import React from 'react'
import news from '../assests/news.jpg'
import { NavLink } from 'react-router-dom'
import WorkCard from './WorkCard'
import workCardData from './WorkCardData'
const Work = () => {
  return (

    <div className='work-container'>
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {workCardData.map((val,ind)=>{
              return(
                < WorkCard key={ind}
                 imgsrc={val.imgsrc}
                  title={val.title}
                  text={val.text}
                  view={val.view}
                />
              )
            })}
            </div>
        </div>

   
  )
}

export default Work