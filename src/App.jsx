import React from 'react'
import Card from './components/Card.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
const App = () => {
  return (
    <div className=" flex flex-col items-center max-w-6xl mx-auto min-h-screen bg-neutral-800  shadow-2xl shadow-neutral-700"> 
    <Navbar/>
    <Home/>
    <Card/>
    <Card/>
    <Card/>
    </div>
  )
}

export default App
