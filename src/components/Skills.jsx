import './Skills.css'

const skills = [
  { name: 'HTML5 & CSS', level: 92 },
  { name: 'JavaScript & TypeScript', level: 90 },
  { name: 'React.js & Material UI', level: 90 },
  { name: 'REST APIs integration', level: 88 },
  { name: 'Version control (Git) & GitHub', level: 88 },
  { name: 'Chrome DevTools', level: 85 },
  { name: 'Axios & Fetch API', level: 88 },
  { name: 'React Testing Library', level: 82 },
  { name: 'Responsive design', level: 90 },
  { name: 'Cross-browser compatibility', level: 85 },
  { name: 'SEO fundamentals', level: 78 },
  { name: 'Performance optimization', level: 85 },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I work with.
        </p>
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill.name} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-pct">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
