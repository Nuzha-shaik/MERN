import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
            <li><Link className="link" to="/home">Home</Link></li>
            <li><Link className="link" to="/about">About</Link></li>
            <li><Link className="link" to="/Contact">Contact</Link></li>
            <li><Link className="link" to="/Service">Service</Link></li>
            <li><Link className="link" to="/UseState">UseState</Link></li>
            <li><Link className="link" to="/Login">Login</Link></li>
            <li><Link className="link" to="/UseEffect">UseEffect</Link></li>
            <li><Link className="link" to="/Signup">SignUp</Link></li>
            <li><Link className="link" to="/Hook">Hooks</Link></li>
            
           

            
        </ul>
      </nav>
    </div>
  )
}

export default Navbar