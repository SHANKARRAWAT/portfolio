import React, { useState } from 'react'
// if we want to import the style
 import  './NavbarStyle.css'
import {Link} from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'
 const Navbar = () => {

 const[click,setClick]=useState(false);
 const handleClick=()=>setClick(!click);

 const[color,setcolor]=useState(false);
 const changeColor=()=>{
  if(window.scrollY>=100){
    setcolor(true);
  }
  else{
    setcolor(false);
  }
 };
 window.addEventListener("scroll",changeColor);
   return (
     <div className={color?"header header-bg":"header"}>
        <Link to="/">  <h1>Shankar's Portfolio</h1></Link>
       <ul  className={click?'nav-menu active':'nav-menu'} > 
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/project">Project</Link></li>
       </ul>

       <div className='hamburger' onClick={handleClick}>
        {/* // if click is true then show (first one) else sign ->: () */}
        {click?(  <FaTimes size={20} style={{color:"#fff"}}/>)
        :
        ( <FaBars size={20} style={{color:"#fff"}}/>)}
        </div>
     </div>
   )
 }
 export default Navbar