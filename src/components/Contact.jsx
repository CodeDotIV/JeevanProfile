import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 800)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get in touch</h2>
        <p className="section-subtitle">
          Have a project in mind or want to say hi? Drop a message.
        </p>
        <div className="contact-inner">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="form-label">
              Name
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Your name"
                required
              />
            </label>
            <label className="form-label">
              Email
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="you@example.com"
                required
              />
            </label>
            <label className="form-label">
              Message
              <textarea
                name="message"
                className="form-input form-textarea"
                placeholder="Your message..."
                rows={5}
                required
              />
            </label>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Send message'}
            </button>
          </form>
          <div className="contact-info">
            <p className="contact-email">
              <strong>Email</strong>
              <a href="mailto:yjeevan.btech.cs19@iiitranchi.ac.in">yjeevan.btech.cs19@iiitranchi.ac.in</a>
            </p>
            <p className="contact-phone">
              <strong>Phone</strong>
              <a href="tel:+918779519137">+91-8779519137</a>
            </p>
            <p className="contact-links">
              <strong>Elsewhere</strong>
              <a href="https://www.linkedin.com/in/jeevan-%F0%9F%8F%8C%EF%B8%8F-240927231/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
