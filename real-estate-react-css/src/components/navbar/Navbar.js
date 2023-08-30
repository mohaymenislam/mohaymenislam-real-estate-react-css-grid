import React, { useState } from 'react';

import './Navbar.css';
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'

const Navbar = () => {
   const [click , setClick] = useState(false);

   const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className="container">
                <h1><span><BsFillHouseFill></BsFillHouseFill>Real</span>Estate</h1>
                <button className='btn'>Sing in</button>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'><a href="/">Home</a></li>
                    <li className='nav-item'><a href="/">Service</a></li>
                    <li className='nav-item'><a href="/">About</a></li>
                    <li className='nav-item'><a href="/">Contact</a></li>
                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {click ? <FaRegTimesCircle className='icon'></FaRegTimesCircle>: <HiOutlineMenuAlt4 className='icon'></HiOutlineMenuAlt4>}
                    
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;