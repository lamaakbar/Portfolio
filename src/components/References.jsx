import React from 'react'
import './References.css'

const References = () => {
  const references = [
    {
      name: 'Nizar Naghi',
      title: 'IT Transformation Manager',
      company: 'The Saudi National Bank (SNB), Jeddah',
    }
  ]

  return (
    <section id="references" className="section references">
      <div className="container">
        <h2 className="section-title">References</h2>
        <div className="references-list">
          {references.map((ref, index) => (
            <div key={index} className="reference-card">
              <h3 className="reference-name">{ref.name}</h3>
              <p className="reference-title">{ref.title}</p>
              <p className="reference-company">{ref.company}</p>
              <a href={`tel:+966${ref.phone.replace(/\s/g, '')}`} className="reference-phone">
                {ref.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default References

