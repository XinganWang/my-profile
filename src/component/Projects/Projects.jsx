import React from 'react'
import './Project.css'
import Project1 from './Project1/Project1'
import Project2 from './Project2/Project2'

export default function Projects() {
    return (
        <section className='section'>
            <div className='projectpage'>
                <div className="title">
                    <h2>Projects</h2>
                    <div className="underline"></div>
                </div>
                <div className='project_container'>
                    <Project2/>
                    <Project1/>
                </div>
            </div>

        </section>
    )
}
