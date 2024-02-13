import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Component/Navigation';
import Hero from './Component/Hero';
import HeroSection from './Component/Hero';
function App() {
 

  return (
    <div>
    <Navigation/>
    <HeroSection/>
    </div>
  )
}

export default App
