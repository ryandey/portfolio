import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {

  return (
    <div className="App">
      <Nav />
      {/* <Navbar className="navbar"/> */}

      <main className="container">
        <Hero />
        <Projects />
      </main>
    </div>
  )
}

export default App
