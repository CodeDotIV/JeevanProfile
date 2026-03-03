import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          © {year} Jeevan Kumar
        </p>
        <a
          href="#"
          className="footer-back"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Back to top
        </a>
      </div>
    </footer>
  )
}
