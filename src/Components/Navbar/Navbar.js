import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import Forfont from '../Forfont/Forfont';

function Navbar() {
  return (
    <div>
        <nav className="navbar">

          
            <h2 className='logo'>
              <Forfont/>
               
            </h2>

          
            

              

              

              

            
               
               <Link className='home' to="/">Home </Link>
               
               <Link to="/signup">Sign up</Link>
               
               

              


            
              
              
              

                

            
        </nav>
    </div>
  )
}

export default Navbar