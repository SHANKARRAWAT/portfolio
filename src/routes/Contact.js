import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg2 from '../components/Heroimg2'
import Footer from '../components/Footer'
import Form from '../components/Form'
export default function Contact() {
  return (
    <div>
   <Navbar />  
    <Heroimg2 heading="contact me"  text="lets discuss"/>
    <Form/>
     <Footer/>
    </div>
  )
}
