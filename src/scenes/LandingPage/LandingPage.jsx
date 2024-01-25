import React from 'react'
import { Link } from 'react-router-dom'
import playArea from '../../assets/PlayArea.png'

import './landingPage.css'

const LandingPage = () => {
  return (
    <div className='landing-container'>
      <div className='landing-hero-container'>
        <h1 className='hero-title'>Master Visual Studio <span>Code</span> Shortcuts</h1>
        <p>Shortcuts Made Simple: Elevate Your Coding Game</p>
        <Link to="/code">
          <div className='hero-button'>
              <span>Get Started</span>
          </div>
        </Link>
      </div>
      <div>
        <img className='hero-image' src={playArea} alt="code editor" />
      </div>
    </div>
  )
}

export default LandingPage