import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './scenes/LandingPage/LandingPage'
import PlayArea from './scenes/playarea/PlayArea'

function App() {
  

  return (
    <>
     <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/code" element={<PlayArea />}/>
     </Routes>
    </>
  )
}

export default App
