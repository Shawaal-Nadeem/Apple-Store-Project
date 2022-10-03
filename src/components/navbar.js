import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
<div>
<nav>
  <label className='logo'>
    <img className='img-size' src= '/images/logo.jpg' alt="logo" />
    </label>
            <ul>
               <li><Link to='/'><button className='navbtn'>Home</button></Link></li>
               <li><Link to='/all-generations'><button className='navbtn'>All Generations</button></Link></li>
               <li><Link to='/about'><button className='navbtn'>About</button></Link></li>
            </ul>
        </nav>
    </div>
  );
}

export default Navbar;