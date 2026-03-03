import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Jio Translate Platform',
    description: 'A multilingual platform enabling real-time translation of text, speech, voice calls, and images. Designed to bridge communication gaps across Indian and global languages.',
    tags: ['React', 'Translation', 'Multilingual'],
    link: '#',
  },
  {
    id: 2,
    title: 'Jio Translate App',
    description: 'A mobile app offering instant translation for text, speech, and calls. Built for travelers, professionals, and multilingual communication.',
    tags: ['Mobile', 'React', 'Real-time'],
    link: '#',
  },
  {
    id: 3,
    title: 'Jio Workspace',
    description: 'A cloud-based digital workspace suite for modern businesses. Provides unified communication, AI-powered tools, and collaborative solutions.',
    tags: ['Cloud', 'Collaboration', 'AI'],
    link: '#',
  },
  {
    id: 4,
    title: 'Zeni',
    description: 'Personal project — details available on request.',
    tags: ['Personal'],
    link: '#',
  },
  {
    id: 5,
    title: 'Health Claim Cost Prediction',
    description: 'Analytics and prediction project for health claim costs.',
    tags: ['Analytics', 'ML'],
    link: '#',
  },
  {
    id: 6,
    title: 'Campus Projects',
    description: 'Academic and extracurricular projects from IIIT Ranchi.',
    tags: ['Campus', 'IIIT Ranchi'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A selection of recent work and side projects.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
                <div className="project-image">
                <div className="project-image-placeholder">
                  <span>{project.title.slice(0, 2)}</span>
                </div>
              </div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="project-link">
                  View project →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
