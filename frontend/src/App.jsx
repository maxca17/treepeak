import './App.css'

function App() {
  return (
    <>
      {/* Nav */}
      <nav className="nav">
        <a href="/" className="nav-logo">Treepeak</a>
        <ul className="nav-links">
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-body">
          <span className="hero-kicker">Federal Contracting Services</span>
          <h1>Serious work for agencies that can't afford mistakes.</h1>
          <p>
            Treepeak provides program management, advisory, and compliance
            services to government clients. Small team, high standards,
            no hand-offs to junior staff.
          </p>
          <a href="#contact" className="hero-cta">
            Get in touch <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="hero-panel" aria-hidden="true" />
      </section>



      {/* Contact */}
      <section id="contact" className="contact">
        <div className="contact-inner">
          <h2>Let's talk about your project.</h2>
          <a href="mailto:info@treepeak.com" className="contact-email">
            info@treepeak.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <span>© {new Date().getFullYear()} Treepeak Holdings. All rights reserved.</span>
      </footer>
    </>
  )
}

export default App
