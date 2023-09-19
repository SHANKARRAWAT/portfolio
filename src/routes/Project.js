import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Work from '../components/Work'
export default function Project() {
  return (
    <div>
    <Navbar />  
    <Heroimg2 heading="Projects"  text="some of my recent projects"/>
    <Work/>
     <Footer/>
    </div>
  )
}
