import React from 'react'
import './Nav.css'
import logo from './assets/logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div>
      <nav className='container'>
        <img className='logo' src={logo} alt="" />
        <div className="menu">
            <Link className="listItem">Home</Link>
            <Link className="listItem">Porfolio</Link>
            <Link className="listItem">About</Link>
            <Link className="listItem">Clients</Link>
        </div>
        <button className='btn'>Contact us</button>
      </nav>
    </div>
  )
}

export default Navbar