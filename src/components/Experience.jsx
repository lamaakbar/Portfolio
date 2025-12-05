import React from 'react'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Summer Intern',
      company: 'The Saudi National Bank (SNB)',
      location: 'Jeddah, Saudi Arabia',
      bullets: [
        'Gained hands-on experience in IT transformation and banking software processes',
        'Contributed to team projects enhancing user-centered solutions in financial technology'
      ]
    }
  ]

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3 className="experience-title">{exp.title}</h3>
                <div className="experience-meta">
                  <span className="experience-company">{exp.company}</span>
                  <span className="experience-location">{exp.location}</span>
                </div>
              </div>
              <ul className="experience-bullets">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

