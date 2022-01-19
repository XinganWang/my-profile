import React from 'react'
import { useNavigate } from 'react-router';
import './Projects.css'
import Project1 from '../../Projects/Project1/Project1'
import Project2 from '../../Projects/Project2/Project2'

export default function Projects() {
    const navigate = useNavigate();
    return (
        <section className='section'>
            <div className='projectpage'>
                <div className="title">
                    <h2>Projects</h2>
                    <div className="underline"></div>
                </div>
                <div className='project_container'>
                    <Project2 />
                    <Project1 />
                </div>

            </div>
            <button type="button" className="btn" onClick={() => navigate('/Projects')}>more projects</button>
        </section>
    )
}
