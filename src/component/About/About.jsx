import React from 'react'
import './About.css'
import photo from '../../images/photo.JPG'

export default function About() {
    return (
        <section className='section'>
            <div className='aboutme-container'>
                <img src={photo} alt='Xingan' className='photo_about'></img>
                <div className='info'>
                    <div className="title">
                        <h2>About Me</h2>
                        <div className="underline"></div>
                    </div>
                    <div>
                        <p>My name is Xingan Wang, a new grad from Computer Programming, Algonquin College.
                            I am now looking for a job as a Front-end Developer.<br/>
                            I used to work in the supply chain at Staple & Philips and
                            spent 7 years as a procurement manager in the aviation industry, 
                            which has largely improved my interpersonal skill and cultivated my analysis ability.<br/>
                            Being exposed to various supply chain management software tools, I gradually realized I hold a strong passion for technical work.
                            Thus, in 2020, I made up my mind to switch my career path and attended Computer Programming at Algonquin College. <br />
                            It turns out that coding is more fun than I had expected, especiall the Front-end part. 
                            I learned HTML, CSS, Javascript, Java, Python at school and self-learned React. <br/>
                            Please feel free to contact me if you have or know any Front-end Developer opportunities that might suit me.
                        </p>
                    </div>
                    <button className='btn'>
                        <a href="mailto:anniewanginca@gmail.com">CONTACT ME</a>
                    </button>
                </div>
            </div>

        </section>
    )
}
