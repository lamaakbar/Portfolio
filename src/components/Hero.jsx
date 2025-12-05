import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">Lama Fathi Akbar</h1>
            <h2 className="hero-title">Software Engineering Student</h2>
            <p className="hero-description">
              Specializing in UI/UX design, frontend web development with HTML and React, 
              and IoT solutions; proficient in Python and Java for interactive, user-centered applications.
            </p>
            <div className="hero-contact">
              <a href="mailto:Lamaf.akbar@gmail.com" className="contact-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Lamaf.akbar@gmail.com
              </a>

              <span className="contact-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Jeddah, Saudi Arabia
              </span>
            </div>
            <div className="hero-social">
              <a href="https://www.linkedin.com/in/lama-akbar/" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
              <a href="https://github.com/lamaakbar/" target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

