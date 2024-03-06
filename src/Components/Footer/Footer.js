import React from 'react'
import './Footer.css';
import marvel from '../../assets/image-marvel-studios-logo-marvel-database-2.png';

import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { GrGooglePlus } from "react-icons/gr";


function Footer() {
  return (
    <div className='Footer'>

      <img className='mar' src={marvel} alt=''/>
      

      <div className='contact'>
        <h3>About us</h3>
        <p>Company informations</p>
        <p>Contact us</p>
        <p>Reviews</p>

      </div>

      <div className='support'>
        <h3>Support</h3>
        <p>FAQ</p>
        <p>Help desk</p>
        <p>Announcement</p>
      </div>

      <div className="icon">

        <FaFacebookF  className='ic'/>
        <BsTwitter className='ico'/>
        <GrGooglePlus className='icons'/>
        

      </div>
      <button className='btt'>Contact Us</button>

      

      

      

      

      
      
        
    </div>
  )
}

export default Footer