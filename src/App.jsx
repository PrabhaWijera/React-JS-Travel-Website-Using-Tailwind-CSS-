import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Destination from './components/Destination'
import Search from './components/Search'
import Footer from './components/Footer'
import Selects from './components/Select'
import Carousel from './components/Carousel'
const App = () => {
  return (
    <div>
       <NavBar  />
       <Hero/>
       <Destination/>
       <Search/>
       <Selects />
      <Carousel />
       <Footer/>
    </div>
  )
}

export default App