import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Counter from './component/Counter'
import UseState from './Hooks/UseState'
import Login from './Auth/Login'
import {Route,Routes} from 'react-router-dom'

const App = () => {
 
  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home name="nuzha"/>}/>
        <Route path='/about' element={<About message="hey hi..this is Nuzha" re="23691a32A3" email="nuzhashaik382@gmail.com"/>}/>
        <Route path='/Contact' element={<Contact c="This is Contact"/>}/>
        <Route path='/Service' element={<Service s="This is muk jnytgvrfw"/>}/>
        <Route path='/UseState' element={<UseState/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      
    </div>
  )
}

export default App
