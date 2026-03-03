import './Skills.css'

const skills = [
  'HTML5 & CSS',
  'JavaScript & TypeScript',
  'React.js & Material UI',
  'REST APIs integration',
  'Version control (Git) & GitHub',
  'Chrome DevTools',
  'Axios & Fetch API',
  'React Testing Library',
  'Responsive design',
  'Cross-browser compatibility',
  'SEO fundamentals',
  'Performance optimization',
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-tags">
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
