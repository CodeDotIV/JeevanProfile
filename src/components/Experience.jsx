import './Experience.css'

const experience = [
  {
    role: 'Software Engineer',
    company: 'Jio Platforms Limited',
    duration: '10/2023 – Present',
    years: '2.6 years',
    points: [
      'Assisted with development of Jio Workspace project.',
      'Contributed to Jio Translate app and platform.',
      'Collaborated with teams to gather requirements and support delivery of software products.',
      'Collaborated with cross-functional teams to deliver high-quality software products on schedule.',
      'Conducted thorough code reviews and provided constructive feedback, fostering best practices among team members.',
    ],
  },
]

const leadership = [
  {
    role: 'Lead – Entrepreneurship Club',
    desc: 'Worked on building EsportsIndia, an e-gaming startup initiative. Organized campus-level events to promote awareness and participation in competitive esports.',
  },
  {
    role: 'Captain – Volleyball Team',
    desc: 'Led the volleyball team and represented in national-level tournaments. Participated in Spardha (2022) at IIT (BHU) Varanasi and an inter-institute sports meet (2019).',
  },
]

const achievements = [
  'State level Chess Championship in APSWREIS',
  'First position in Zonal level Debate Competition',
  'First place in district level elocution',
  'National level Volleyball participation in Spardha',
  'TVS Credit E.P.I.C Analytics Challenge',
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          Work experience and leadership roles.
        </p>
        <div className="experience-list">
          {experience.map((job) => (
            <article key={job.company} className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-role">{job.role}</h3>
                  <p className="experience-company">{job.company}</p>
                </div>
                <div className="experience-meta">
                  <span className="experience-duration">{job.duration}</span>
                  <span className="experience-years">{job.years}</span>
                </div>
              </div>
              <ul className="experience-points">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <h3 className="subsection-title">Leadership</h3>
        <div className="leadership-list">
          {leadership.map((item) => (
            <div key={item.role} className="leadership-card">
              <h4 className="leadership-role">{item.role}</h4>
              <p className="leadership-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">Achievements</h3>
        <ul className="achievements-list">
          {achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
