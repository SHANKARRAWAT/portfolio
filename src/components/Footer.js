import './FooterStyle.css'

import React from 'react'
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
       
       <div className="footer-container">
         <div className="left">

                <div className="location">
                    <FaHome size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                    
                    <p>Deghat,Almora,Uttarakhand</p>
                    <p>India.</p>
                 </div>
                 <div>
              
                
                    <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                    +91 7055850392
                    </h4>
                    </div>

                    <div className="mail">
                    <h4>
                    <FaMailBulk size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                    <a href="mailto: shankarrawat263659@gmail.com">send email</a>
                    </h4>
                    </div>


                </div>

         </div>
        
         <div className="right">
            <h4>About Myself</h4>
            <p>I  am shankar rawat and B.Tech graduate in CSE from DIT University having knowledge in web development and basic Java development.</p>
            <div className="social">
                <h4>
              
              
             <a href="https://www.linkedin.com/in/shankar-rawat-1892bb209/">  <FaLinkedin size={20} style={{color:'#fff',  marginRight:'2rem'}}/></a>
            <FaFacebook size={20} style={{color:'#fff',  marginRight:'2rem'}}/>
            <FaTwitter size={20} style={{color:'#fff',  marginRight:'2rem'}}/>
            </h4>
            </div>

         </div>

       </div>
    </div>
  )
}

export default Footer
