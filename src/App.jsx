import { useState } from 'react'
import './App.css'
import { WelcomePage } from './pages/welcomePages'
import { BrowserRouter, Route, Routes } from 'react-router'
import { AnimatePresence } from 'framer-motion'
import Navbar from './component/Navbar'
import AnimatedBackground from './component/Background'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/portfolio.jsx'
import ContactPage from './pages/Contact'

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
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Portfolio />
          <ContactPage/>
          <footer>
            <center>
              <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
              <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">© 2024{" "}<a href="#" className="hover:underline">SKJ™</a>. All Rights Reserved.</span>
            </center>
          </footer>
        </>
      )}
    </>
  )
}

function App() {
  const [showwelcome, setshowwelcome] = useState(false)

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
