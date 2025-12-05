import React from 'react'
import './Logo.css'

const Logo = ({ onClick }) => {
  return (
    <div className="logo-container" onClick={onClick}>
      <div className="logo-circle">
        <span className="logo-text">LM</span>
      </div>
      <div className="logo-glow"></div>
    </div>
  )
}

export default Logo

