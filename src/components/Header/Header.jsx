import React, { useEffect, useState } from 'react'
import './header.css'

const Header = ({name,instruction, onNextClick,keys}) => {
  const pressedKeys = [];
  const [disabled, setDisabled] = useState(true);
  
  const handleKeyPress = (e) => {
    if(keys.includes(e.key)){
      if(!pressedKeys.includes(e.key)){
        pressedKeys.push(e.key);
      }
      const elementId = keys[keys.indexOf(e.key)];
      document.getElementById(elementId).classList.add('active-key')     
      if(pressedKeys.length === keys.length){
        setDisabled(false);
      }
    }
  }
  useEffect(()=>{
    document.addEventListener('keydown',handleKeyPress)
  })
  return (
    <header>
      <div className='header-container'>
        <h1>{name}</h1>
        <p dangerouslySetInnerHTML={{__html:instruction}}></p>
        <button onClick={() => { onNextClick(); setDisabled(true); }} className='next-button' disabled={disabled}>Next</button>
      </div>
        
    </header>
  )
}

export default Header
