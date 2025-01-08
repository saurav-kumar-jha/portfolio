import { useState } from 'react'
import './App.css'
import { WelcomePage } from './pages/welcomePages'
import { BrowserRouter, Route, Routes } from 'react-router'
import { AnimatePresence } from 'framer-motion'
import Navbar from './component/Navbar'
import AnimatedBackground from './component/Background'
import Home from './pages/Home'
import About from './pages/About'

const LandingPage = ({ showwelcome, setshowwelcome }) => {
  return (
    <>
      <AnimatePresence mode='wait' >
        {showwelcome && (
          <WelcomePage onLoadingComplete={() => setshowwelcome(false)} />
        )}
      </AnimatePresence>
      {!showwelcome && (
        <>
        <Navbar/>
        <AnimatedBackground/>
        <Home/>
        <About/>
        </>
      )}
    </>
  )
}

function App() {
  const [showwelcome, setshowwelcome] = useState(true)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage showwelcome={showwelcome} setshowwelcome={setshowwelcome} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
