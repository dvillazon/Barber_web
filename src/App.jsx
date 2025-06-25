import React from 'react'
import Card from './components/Card.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
const App = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-6xl  md:w-auto sm:p-0 mx-auto min-h-screen bg-neutral-800  shadow-2xl shadow-neutral-700"> 
    <Navbar/>
    <section id='inicio'> <Home/></section>
    <section id='card'> <Card/> </section>
    <section id='card'> <Card/> </section>
    <section id='card'> <Card/> </section>
    </div>
  )
}

export default App
