import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Jio Translate Platform',
    description: 'One voice, infinite audiences. Dubbing, text-to-speech, speech-to-text, voice library, and subtitle generation for streamlined content delivery.',
    tags: ['Translation', 'TTS', 'Voice'],
    link: '#',
    image: 'jio-translate-platform.png',
  },
  {
    id: 2,
    title: 'Jio Translate App',
    description: 'Chat in any language, connect in every way. Mobile app with voice chat, text and speech translation for travelers and multilingual communication.',
    tags: ['Mobile', 'Voice chat', 'Translation'],
    link: '#',
    image: 'jio-translate-app.png',
  },
  {
    id: 3,
    title: 'Jio Workspace',
    description: 'Next-Gen AI Ready Computer. Cloud-based digital workspace with unified communication, AI-powered tools, and collaborative solutions for modern businesses.',
    tags: ['JioPC', 'Cloud', 'AI'],
    link: 'https://jioworkspace.com/?redirectUri=launchpad.jioworkspace.com&login_required=true',
    image: 'jio-workspace.png',
  },
  {
    id: 4,
    title: 'Zeni',
    description: 'Productivity dashboard with today\'s schedule, smart suggestions, priority tasks, and analytics. Focus time tracking and task completion at a glance.',
    tags: ['Personal', 'Dashboard', 'Productivity'],
    link: 'https://codedotiv.github.io/ZENI/',
    image: 'zeni.png',
  },
  {
    id: 5,
    title: 'Health Claim Cost Prediction',
    description: 'Data-driven analytics and ML-based prediction for health claim costs. Visualizes trends, metrics, and diagnostics for healthcare analytics.',
    tags: ['Analytics', 'ML', 'Healthcare'],
    link: 'https://codedotiv.github.io/Health-care/',
    image: 'health-claim.png',
  },
  {
    id: 6,
    title: 'Campus Projects',
    description: 'Ready-to-use mini and major academic projects from IIIT Ranchi — for final year and campus assignments.',
    tags: ['Campus', 'IIIT Ranchi', 'Academic'],
    link: 'https://codedotiv.github.io/CampusProject/',
    image: 'campus-projects.png',
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
                {project.image ? (
                  <img src={`${import.meta.env.BASE_URL}${project.image}`} alt="" className="project-img" />
                ) : (
                  <div className="project-image-placeholder">
                    <span>{project.title.slice(0, 2)}</span>
                  </div>
                )}
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
                <a
                  href={project.link}
                  className="project-link"
                  target={project.link.startsWith('http') ? '_blank' : undefined}
                  rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
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
