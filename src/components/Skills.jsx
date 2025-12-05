import React from 'react'
import './Skills.css'

const Skills = () => {
  const hardSkills = [
    'Java', 'Python', 'HTML', 'CSS', 'React', 'Responsive Web Design', 
    'Figma', 'Canva', 'Illustrator', 'PowerPoint', 'Testing & Validation', 
    'Technical Writing', 'Documentation'
  ]

  const softSkills = [
    'Leadership', 'Presentation', 'Time Management'
  ]

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-content">
          <div className="skills-category">
            <h3 className="category-title">Hard Skills</h3>
            <div className="skills-list">
              {hardSkills.map((skill, index) => (
                <span key={index} className="skill-item hard-skill">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skills-category">
            <h3 className="category-title">Soft Skills</h3>
            <div className="skills-list">
              {softSkills.map((skill, index) => (
                <span key={index} className="skill-item soft-skill">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

