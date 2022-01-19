import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import './Experience.css'
import { FaAngleDoubleRight } from 'react-icons/fa'
import jobs from './data'

export default function Experience() {
    const [value, setValue] = useState(0)
    const { company, date, desc, title } = jobs[value]
    const navigate = useNavigate();

    return (
        <section className="job-container">
            <div className="title">
                <h2>Experience</h2>
                <div className="underline"></div>
            </div>
            <div className='jobs'>
                <div className='btn-container'>
                    {jobs.map((job, index) => {
                        return (
                            <button
                                key={job.id}
                                onClick={() => setValue(index)}
                                className={`job-btn ${index === value && 'active-btn'}`}>
                                {job.title}
                            </button>
                        )
                    })}                    
                </div>
                <article className="job-info">
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className='job-date'>{date}</p>
                    {desc.map((desc, index) => {
                        return (
                            <div key={index} className="job-desc">
                                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                                <p>{desc}</p>
                            </div>
                        )
                    })}
                </article>
            </div>
            <button type="button" className="btn" onClick={()=> navigate ('/About')}>more info</button>
        </section>
    )
}
