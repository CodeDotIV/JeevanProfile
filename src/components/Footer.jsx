import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          © {year} Jeevan Kumar
        </p>
        <a href="#hero" className="footer-back">Back to top</a>
      </div>
    </footer>
  )
}
