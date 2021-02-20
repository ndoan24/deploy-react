import React from 'react';
import '../App.css';
import { Button } from './Button';
import './IntroSection.css';

function IntroSection() {
  return (
    <div className='intro-container'>
      
      <div className="bg-image">
        
  <img src='https://images.unsplash.com/photo-1503601350100-26336a6beda2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80g'></img>



</div>

      <h1>THAI TACOS</h1>
      <h2>Inspired TACOS</h2>
      <p>We are located at South Pearl Street | Farmers Market
        <br></br><br></br> <center>Located in Denver, CO</center></p>
      <div className='intro-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ORDER NOW 
        </Button>
     
      </div>
    </div>


    
  );
}

export default IntroSection;
