import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      name: 'Pearl Link',
      description: 'PEARL (Proactive Early Awareness & Readiness Layer) is an on-premise system designed to detect early signs of mental and physical fatigue in air traffic controllers (ATCOs).',
      technologies: ['React', 'TypeScript', 'Vite', 'Node.js', 'YOLO (YOLOv11)', 'SQLite', 'REST API']
    },
    {
      name: 'AutoShield',
      description: 'Developed automatic IoT-powered system that adjusts umbrellas based on environmental sensors and conditions.',
      technologies: ['IoT', 'Sensors', 'Python']
    },
    {
      name: 'EventKey',
      description: 'Built website connecting users with service providers for efficient event organization and management.',
      technologies: ['HTML', 'CSS', 'React']
    },
    {
      name: 'Bloom',
      description: 'Created platform for plant browsing, searching, purchasing, and care management to enhance user engagement.',
      technologies: ['React', 'UI/UX Design']
    },
    {
      name: 'STEP (5th KASU-HS)',
      description: 'Designed wearable sensors and mobile app to monitor Multiple Sclerosis progression with real-time data.',
      technologies: ['IoT', 'Sensors', 'Java']
    },
    {
      name: 'Be My Eyes (5th KASU-HS)',
      description: 'Developed app that amplifies sounds and interprets them into text for accessibility.',
      technologies: ['Python', 'Audio Processing']
    }
  ]

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                <span className="technologies-label">Technologies:</span>
                <div className="tech-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

