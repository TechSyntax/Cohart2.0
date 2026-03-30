import React from 'react'
import './App.css'
import './index.css'
import Navbar from './assets/Components/Navbar'
import Home from './assets/Pages/Home'
import { Route, Routes} from 'react-router-dom'
import About from './assets/Pages/About'
import Course from './assets/Pages/Course'
import Kodex from './assets/Pages/Kodex'
import Koder from './assets/Pages/Koder'
import { Outlet } from 'react-router-dom'
import Footer from './assets/Pages/Footer'
// import Footer from './assets/Components/Footer'


const App = () => {
  return (
    <div>
      <Navbar />

  <Routes>
    <Route path='/' element={<Home />} ></Route>
    <Route path='/About' element={<About />} ></Route>
    <Route path='/Course' element={<Course />} ></Route>
     <Route path='/Course/Koder' element={<Koder />} ></Route>
     <Route path='/Course/Kodex' element={<Kodex />} ></Route>
    </Routes> 
    <Footer />
 
    </div>
  )
}

export default App
