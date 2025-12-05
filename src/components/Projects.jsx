import React, { useState } from 'react'
import ProjectModal from './ProjectModal'
import './Projects.css'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      name: 'Pearl Link',
      description: 'PEARL (Proactive Early Awareness & Readiness Layer) is an on-premise system designed to detect early signs of mental and physical fatigue in air traffic controllers (ATCOs).',
      technologies: ['React', 'TypeScript', 'Vite', 'Node.js', 'YOLO (YOLOv11)', 'SQLite', 'REST API'],
      images: [
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
      ]
    },
    {
      name: 'AutoShield',
      description: 'Developed automatic IoT-powered system that adjusts umbrellas based on environmental sensors and conditions.',
      technologies: ['IoT', 'Sensors', 'Python'],
      images: [
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop'
      ]
    },
    {
      name: 'EventKey',
      description: 'Built website connecting users with service providers for efficient event organization and management.',
      technologies: ['HTML', 'CSS', 'React'],
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
      ]
    },
    {
      name: 'Bloom',
      description: 'Created platform for plant browsing, searching, purchasing, and care management to enhance user engagement.',
      technologies: ['React', 'UI/UX Design'],
      images: [
        'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&h=600&fit=crop'
      ]
    },
    {
      name: 'STEP (5th KASU-HS)',
      description: 'Designed wearable sensors and mobile app to monitor Multiple Sclerosis progression with real-time data.',
      technologies: ['IoT', 'Sensors', 'Java'],
      images: [
        'https://images.unsplash.com/photo-1559757148-5c350d0e4c8e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop'
      ]
    },
    {
      name: 'Be My Eyes (5th KASU-HS)',
      description: 'Developed app that amplifies sounds and interprets them into text for accessibility.',
      technologies: ['Python', 'Audio Processing'],
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
      ]
    }
  ]

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              onClick={() => handleProjectClick(project)}
            >
              <div className="project-card-header">
                <h3 className="project-name">{project.name}</h3>
                <div className="project-view-indicator">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  <span>View Images</span>
                </div>
              </div>
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
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}

export default Projects

