import React from 'react'
import './Home.css';
import Banner from '../../Components/Banner/Banner';
import RowPost1 from '../../Components/RowPost1/RowPost1'
import RowPost2 from '../../Components/RowPost2/RowPost2';


import Totainfo from '../../Components/Totainfo/Totainfo';




function Home() {
  return (
    <div>
      
      
      <Banner/>
      <RowPost1/>
      <RowPost2/>
      
      <Totainfo/>

    </div>
  )
}

export default Home