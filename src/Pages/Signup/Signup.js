import React, { useState } from 'react'
import './Signup.css';
import { database } from '../../Components/FirebaseConfig';
import {createUserWithEmailAndPassword } from 'firebase/auth'
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import morbb from '../../assets/Loki-Cloak-Header.webp'







import { Route, Routes,Link,useNavigate} from 'react-router-dom';

function Signup() {
  
  


  



  const navigate = useNavigate();


const handlesubmit=(e,type)=>{
  e.preventDefault()

 // console.log(e.target.email.value);
  //console.log(e.target.password.value);
  
  const email = e.target.email.value;
  const password  = e.target.password.value;


  
    createUserWithEmailAndPassword(database,email,password).then(data=>{console.log
      (data,"authData")
      navigate('/')
      alert("you are signed up")
      
      
  
  
  }

  
  
  ).catch(err=>{
    alert(err.code)
    
    

  })
  

 
    

  

  
    

   
  
  
  


  

} 




  return (
    
      <div className='sing' style={{ backgroundImage:`url(${morbb})`,backgroundSize: 'cover'}}>
      
      <button className='josea' onClick={()=>{
        navigate('/')

      }}>home</button>
      <button className='josee'>signup</button>
      

      <div className='backi'>

        <div className='box'>
          <div className='parto'></div>
          <div className='partt'>

            

            

            <h1>signup</h1>
            <form onSubmit={(e)=>handlesubmit(e)}>

             
             
            <input type='text' placeholder='firstname' name='firstname'/><br/> 
             <input type='text' placeholder='lastname' name='lastname'/><br/>
             <input type='text' placeholder='phone number' name='phone'/><br/>
            <input type='text' placeholder='email' name='email'/><br/>
            <input type='password' placeholder='password' name='password'/><br/>
            <input type='password' placeholder='confirm password' name='confirm'/><br/>
            

            <button className='joseee'>signup</button>
            <Link to='/login'>hei</Link>

            

            
            
            


            </form>

            

            
            
            


            

            
            






            

          </div>

          
           

        </div>

         

      </div>
      
      <Routes>
      
      <Route path='/login' exact element={<Login/>}/>
         
         
         
         


      </Routes>

      

     
    </div>


    
    
    
  )
}

export default Signup