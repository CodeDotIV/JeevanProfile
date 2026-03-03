import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" aria-hidden />
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">Yellutla Jeevan Kumar</h1>
          <p className="hero-tagline">
            Software Engineer with a focus on responsive design and performance optimization. I deliver quality software products and adapt to evolving project needs.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in touch
            </a>
          </div>
        </div>
        <div className="hero-image-wrap" aria-hidden>
          <img src={`${import.meta.env.BASE_URL}hero-react.png`} alt="" className="hero-image" />
        </div>
      </div>
    </section>
  )
}
