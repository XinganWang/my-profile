import React from 'react'
import './Education.css'
import logo from '../../../images/image.png'

export default function Education() {
    return (
        <section className='section'>
            <div className="title">
                <h2>Education</h2>
                <div className="underline"></div>
            </div>
            <div className='container_edu'>
                <img src={logo} alt='Algonquin College' className='photo_edu'></img>
                <div className='edu-info'>
                    <header>
                        <h3>Computer Programming</h3>
                        <h4>Algonquin College of Applied Arts and Technology</h4>
                        <p>Jan. 2020 - Dec. 2021</p>
                    </header>
                    <span>GPA 3.98/4.0 | Graduated with Honours</span>
                </div>
                <div className='course-info'>
                    <h4>Courses Completed</h4>
                    <p>
                        Web Programming (HTML, CSS, JavaScript, PHP)<br/>
                        Database Systems (MySQL, Oracle, PostgreSQL)<br/>
                        Advanced Database Topics<br/>
                        Object-Oriented Programming with Design Patterns (Java)<br/>
                        Enterprise Application Programming (Java)<br/>
                        Programming Language Research Project (Python)<br/>
                        Mobile Graphical Interface Programming (Android)
                    </p>

                </div>
            </div>

        </section>
    )
}
