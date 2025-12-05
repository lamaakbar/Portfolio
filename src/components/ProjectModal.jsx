import React, { useEffect, useState } from 'react'
import './ProjectModal.css'

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setCurrentImageIndex(0)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  const images = project.images || []
  const hasMultipleImages = images.length > 1

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div className="modal-header">
          <h2 className="modal-project-name">{project.name}</h2>
          <p className="modal-project-description">{project.description}</p>
        </div>

        {images.length > 0 ? (
          <div className="modal-image-container">
            {hasMultipleImages && (
              <button 
                className="modal-nav-btn modal-nav-prev" 
                onClick={prevImage}
                aria-label="Previous image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </button>
            )}

            <div className="modal-image-wrapper">
              <img 
                src={images[currentImageIndex]} 
                alt={`${project.name} - Image ${currentImageIndex + 1}`}
                className="modal-image"
              />
              {hasMultipleImages && (
                <div className="modal-image-counter">
                  {currentImageIndex + 1} / {images.length}
                </div>
              )}
            </div>

            {hasMultipleImages && (
              <button 
                className="modal-nav-btn modal-nav-next" 
                onClick={nextImage}
                aria-label="Next image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            )}

            {hasMultipleImages && images.length > 1 && (
              <div className="modal-image-dots">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`modal-dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="modal-no-images">
            <p>No images available for this project</p>
          </div>
        )}

        <div className="modal-technologies">
          <span className="modal-tech-label">Technologies:</span>
          <div className="modal-tech-tags">
            {project.technologies.map((tech, i) => (
              <span key={i} className="modal-tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal

