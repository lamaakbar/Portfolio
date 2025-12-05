import React from 'react'
import Signature from './Signature'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {currentYear} Lama Fathi Akbar. All rights reserved.</p>
          <div className="footer-links">
            <a href="mailto:Lamaf.akbar@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/lama-akbar/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/lamaakbar/" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <Signature />
      </div>
    </footer>
  )
}

export default Footer

