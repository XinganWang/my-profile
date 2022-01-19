import React, { useState } from 'react'
import {NavLink} from "react-router-dom";
import { FaBars } from 'react-icons/fa'
import './Navbar.css'
import logo from '../../logo192.png';


export default function Navbar() {
    const [showLinks, setShowLinks] = useState(false)
    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} alt='logo' className='logo'/>
                    <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
                        <FaBars />
                    </button>
                </div>
                <div className={`${showLinks ? 'links-container show-container' : 'links-container'}`}>
                    <ul className='navLink'>
                        <li>
                            <NavLink to='/home'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/projects'>Projects</NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>

    )
}
