import './FormStyle.css'

import React from 'react'

const Form = () => {
  return (
    <div className='form'>
     <form action="">

      <label htmlFor="">Your Name</label>
      <input type="text" name="" id="" />

      <label htmlFor="">Email</label>
      <input type="email" name="" id="" />

      <label htmlFor="">Subject</label>
      <input type="text" name="" id="" />

      <label htmlFor="">message</label>
      <textarea rows='6' placeholder='type your message here'/>
    
     <button className='btn'>submit</button>
      </form>
    </div>
  )
}

export default Form
