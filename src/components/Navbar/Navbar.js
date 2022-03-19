import React from 'react'
import {
    Link
  } from "react-router-dom";


const Navbar = () => {
  return (
     <header>
        <div className ="navContainer">
        <img className="logo" src="./images/logo.png" alt="logo"/>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Products">Products</Link></li>
                    <li><Link to="/compontents/Contact/Contact">Contact</Link></li>
                </ul>    
            </nav>
        
        </div> 
       </header>
    
  )
}

export default Navbar