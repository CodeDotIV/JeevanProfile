import { useState } from 'react'
import './Header.css'

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const handleNavClick = (e) => {
    e.preventDefault()
    const id = e.currentTarget.getAttribute('data-section')
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="header">
      <div className="header-inner container">
        <a href="#" className="logo" data-section="hero" onClick={handleNavClick}>
          Portfolio
        </a>
        <button
          type="button"
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav ${open ? 'nav-open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href="#"
              data-section={link.id}
              className="nav-link"
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
