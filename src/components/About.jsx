import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About me</h2>
        <p className="section-subtitle">
          Dedicated Software Development Engineer II with initiative in software product delivery.
        </p>
        <div className="about-content">
          <div className="about-text">
            <p>
              I implement responsive design principles and performance optimisation techniques to enhance user satisfaction. I adapt to evolving project needs and maintain a strong focus on quality assurance.
            </p>
            <p>
              I graduated in Computer Science and Engineering from IIIT Ranchi (2023) and have been building products at Jio Platforms since. I've led the Entrepreneurship Club at IIIT Ranchi and captained the college volleyball team, representing the institute at national-level tournaments.
            </p>
          </div>
          <div className="about-meta">
            <div className="meta-item">
              <span className="meta-label">Education</span>
              <span className="meta-value">B.Tech CSE, IIIT Ranchi (2023)</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Location</span>
              <span className="meta-value">Ranchi, India</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Availability</span>
              <span className="meta-value">Open to opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
