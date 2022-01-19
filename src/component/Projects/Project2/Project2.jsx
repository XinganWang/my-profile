import React from 'react'
import './Project2.css'
import logo from '../../../images/parks.jpg'
import { FiExternalLink } from "react-icons/fi";

export default function Project2() {
    return (
        <div className='p1-container'>
            <div className='image'>
                <img src={logo} alt='Parks' className='github-logo'></img>
            </div>
            <div className='text'>
                <h3>National Parks Canada</h3>
                <ul>
                    <br />
                    <li>
                        List and introduce Canada's 48 national parks.
                    </li>
                    <li>
                        Filter by provinces.
                    </li>
                    <br /><br /><br /><br />
                </ul>
                <div className='skills-container'>
                    <div className='skill'>REACT</div>
                    <div className='skill'>HTML</div>
                    <div className='skill'>CSS</div>
                    <div className='skill'>JAVASCRIPT</div>
                    <a className='link' href='https://xinganwang.github.io/national-parks/'>
                        <FiExternalLink />
                    </a>
                </div>

            </div>
            <div>

            </div>

        </div>
    )
}
