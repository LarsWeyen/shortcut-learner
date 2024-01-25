import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './scenes/LandingPage/LandingPage'
import PlayArea from './scenes/PlayArea/PlayArea'

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
