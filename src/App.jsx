import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Login from './components/Login'

function App() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer onLoginClick={() => setShowLogin(true)} />
      
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </div>
  )
}

export default App