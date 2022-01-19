import React from 'react'
import { useNavigate } from 'react-router';
import './Hello.css'
import photo from '../../../images/photo.JPG'

export default function Hello() {
    const navigate = useNavigate();
    return (
        <section className="section">
            <div className='container_hello'>
                <article className='info'>
                    <div className="underline_hello"></div>
                    <h2>I'm Xingan</h2>
                    <h4>Phone: 438-728-5054 | anniewanginca@gmail.com | Ottawa, ON</h4><br/>
                    <p>A new grad from Computer Programming, Algonquin College. <br/>
                        Looking for a job as a Front-end Developer
                    </p>
                    <button className='btn'>
                        <a href="mailto:anniewanginca@gmail.com">CONTACT ME</a>
                    </button>
                </article>
                <article>
                    <img src={photo} className='photo' alt='Xingan wang'></img>
                </article>
            </div>
        </section>
    )
}
