import React from 'react'
import './Project1.css'
import logo from '../../../images/github.jpg'
import { FiExternalLink } from "react-icons/fi";

export default function Project1() {

    return (
        <div className='p1-container'>
            <div className='image'>
                <img src={logo} alt='GitHub' className='github-logo'></img>
            </div>
            <div className='text'>
                <h3>GitHub Users Search</h3>
                <ul><br />
                    <li>
                        Web application which has different user information in card form.
                    </li>
                    <li>
                        Search dynamically through GitHub by usernames.
                    </li>
                    <li>
                        Data is retrieved from API.
                    </li>
                    <br /><br /><br />
                </ul>
                <div className='skills-container'>
                    <div className='skill'>REACT</div>
                    <div className='skill'>HTML</div>
                    <div className='skill'>CSS</div>
                    <div className='skill'>JAVASCRIPT</div>
                    <a className='link' href='https://xinganwang.github.io/user-search/'>
                        <FiExternalLink />
                    </a>
                </div>

            </div>
            <div>

            </div>

        </div>
    )
}
