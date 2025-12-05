import React from 'react'
import './Languages.css'

const Languages = () => {
  const languages = [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Fluent' }
  ]

  return (
    <section id="languages" className="section languages">
      <div className="container">
        <h2 className="section-title">Languages</h2>
        <div className="languages-list">
          {languages.map((lang, index) => (
            <div key={index} className="language-item">
              <span className="language-name">{lang.name}</span>
              <span className="language-level">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Languages

