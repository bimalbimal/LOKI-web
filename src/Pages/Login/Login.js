import React from 'react'
import './Login.css'; 
import { database } from '../../Components/FirebaseConfig';
import Home from '../../Pages/Home/Home';
import {signInWithEmailAndPassword } from 'firebase/auth'
import { Route, Routes,Link,useNavigate} from 'react-router-dom';
import Signup from '../../Pages/Signup/Signup'
import Cards from '../../Components/Cards/Cards';




function Login() {

  const navigate = useNavigate();

  const handlesubmit=(e,type)=>{
    e.preventDefault()
  
   // console.log(e.target.email.value);
    //console.log(e.target.password.value);
    
    const email = e.target.email.value;
    const password  = e.target.password.value;
  
    signInWithEmailAndPassword(database,email,password).then(data=>{console.log
      (data,"authData")
      navigate('/')
      alert("successfully sign in ")


    }).catch(err=>{
      alert(err.code)
    })
  
  
  
  }

    


    

  

  return (
    <div>
      <div className='mike'>
          <button onClick={()=>{
            navigate('/')
          }}>home</button>
          <button>signin</button>

      </div>
      <div className='kal'>

        <form onSubmit={(e)=>handlesubmit(e)}>

        <input type='text' placeholder='email' name='email'/><br/>
            <input type='password' placeholder='password' name='password'/><br/>

            <button>sign in</button>

        </form>
        

        

        <Link to='/signup'>signup</Link>

        <Routes>
          <Route path='/signup' exact element={<Signup/>}/>
        </Routes>

          
          
          
      </div>
      
    </div>
  )
}

export default Login