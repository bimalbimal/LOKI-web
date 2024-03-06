
import React from 'react'
import './App.css';
import Home from './Pages/Home/Home';

import Trail from './Pages/Trail/Trail';
import Detlon from './Pages/Detlon/Detlon';
import Detltw from './Pages/Detltw/Detltw';
import Detlth from './Pages/Detlth/Detlth';
import Detlfo from './Pages/Detlfo/Detlfo';
import Detlfiv from './Pages/Detlfiv/Detlfiv';
import Detlsix from './Pages/Detlsix/Detlsix';
import Detlse from './Pages/Detlse/Detlse';
import Detlei from './Pages/Detlei/Detlei';
import Detlnine from './Pages/Detlnine/Detlnine';
import Detlten from './Pages/Detlten/Detlten';
import Detlilev from './Pages/Detlilev/Detlilev';
import Detltwel from './Pages/Detltwel/Detltwel';
import Login from './Pages/Login/Login';
 



import Signup from './Pages/Signup/Signup'
import Footer from './Components/Footer/Footer';

import { BrowserRouter ,Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
       



       <Routes>

        <Route path='/' exact element={<Home/>}/>
        
        <Route path='/signup' exact element={<Signup/>}/>
        <Route path='/trail' exact element={<Trail/>}/>
        <Route path='/detlon' exact element={<Detlon/>}/>
        <Route path='/detltw' exact element={<Detltw/>}/>
          <Route path='/detlth' exact element={<Detlth/>}/>
          <Route path='/detlfo' exact element={<Detlfo/>}/>
          <Route path='/detlfiv' exact element={<Detlfiv/>}/>
          <Route path='/detlsix' exact element={<Detlsix/>}/>
          <Route path='/detlse' exact element={<Detlse/>}/>
          <Route path='/ detlei' exact element={< Detlei/>}/>
          <Route path='/detlnine' exact element={<Detlnine/>}/>
          <Route path='/detlten' exact element={<Detlten/>}/>
          <Route path='/detlilev' exact element={<Detlilev/>}/>
          <Route path='/detltwel' exact element={<Detltwel/>}/>
          <Route path='/login' exact element={<Login/>}/>
          
          
          

          


        


       </Routes>
       <Footer/>
      
      
      
      </BrowserRouter>

      



     
      
      
      
      
      
      

      
    </div>
  );
}

export default App;
