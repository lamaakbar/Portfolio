import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="logo" onClick={() => scrollToSection('hero')}>
            <span>LFA</span>
          </div>
          <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a></li>
            <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a href="#education" onClick={() => scrollToSection('education')}>Education</a></li>
            <li><a href="#certifications" onClick={() => scrollToSection('certifications')}>Certifications</a></li>
          </ul>
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header

