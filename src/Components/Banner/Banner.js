import React,{useState,useEffect} from 'react'
import './Banner.css';
import loki from '../../assets/HrVFfiiXFGFKbvHXn2um5C.jpg';
import lokii from '../../assets/maxresdefault.jpg';
import lokiy from '../../assets/King-Loki-prepares-to-attack-in-Marvel-Comics..jpeg';
import lokiii from '../../assets/Untitled-design-2023-09-29T104425.491.webp';
import lokib from '../../assets/Loki-Reading-Order.jpg';
import { Route, Routes,useNavigate} from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";





import Signup from '../../Pages/Signup/Signup'







function Banner() {


 



 


  

  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const backgroundImages = [loki, lokii, lokiy,lokiii,lokib];

    const updateBackgroundImage = () => {
      const randomIndex = Math.floor(Math.random() * backgroundImages.length);
      setBackgroundImage(backgroundImages[randomIndex]);
    };

    // Update the background image every 30 seconds
    const intervalId = setInterval(updateBackgroundImage, 30000);

    // Clear the interval and set a new one every 30 seconds
    const resetInterval = () => {
      clearInterval(intervalId);
      setInterval(updateBackgroundImage, 30000);
    };

    // Set the initial background image
    updateBackgroundImage();

    // Reset the interval after each change
    const resetId = setInterval(resetInterval, 30000);

    // Clear the interval when the component is unmounted
    return () => {
      clearInterval(intervalId);
      clearInterval(resetId);
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount


  
   

  const navigate = useNavigate();
 
  

   
    
  return (
    <div className='banner'>
       
          
      
      
        <div className="back" style={{ backgroundImage:`url(${backgroundImage})`}}>
          <div className='lol'>
          
           <button className='hoop' >  Home</button>
          
           <button className='hooop'  
           onClick={()=>{
            setBackgroundImage();
            navigate('/signup')}
            
          } >Sign Up</button>
          
          



          </div>
          

          
          
        


       


          
        
            
           
            
          <div className="content">
            <h1 className="title">Loki</h1>
            <div className="banner-buutons">
                <button onClick={setBackgroundImage} className="btn">in comics</button>
                <button onClick={setBackgroundImage} className="btn">in series</button>
                
                
            </div>
            <h1 className="disc">Loki is an American television series created by Michael Waldron for the streaming service Disney+, based on Marvel Comics featuring the character of the same name. It is the third television series in th…</h1>
            
          </div>


          
               
               
          

          

          <div className='fade'></div>

        </div>

        <Routes>
         
         <Route path='/signup' exact element={<Signup/>}/>
        </Routes>

        

       
    </div>
  )
}

export default Banner