import React from 'react'
import './Certifications.css'

const Certifications = () => {
  const certifications = [
    { name: 'Data Analytics Fundamentals Certificate', issuer: 'IBM SkillsBuild' },
    { name: 'Overview of IoT Technologies', issuer: 'Huawei' },
    { name: 'HCIA-AI V3.5 Course Certificate', issuer: 'Huawei' },
    { name: 'HCIA-openEuler V1.0 Course Certificate', issuer: 'Huawei' },
    { name: 'HCIA-Cloud Service V3.5 Course Certificate', issuer: 'Huawei' },
    { name: 'HCIA-Cloud Computing V5.5 Course Certificate', issuer: 'Huawei' }
  ]

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="cert-icon">🏆</div>
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

