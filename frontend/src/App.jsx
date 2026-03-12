import './App.css'

function App() {
  return (
    <>
      {/* Nav */}
      <nav className="navbar">
        <div className="nav-logo">Treepeak</div>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#capabilities">Capabilities</a></li>
          <li><a href="#contact" className="nav-cta">Contact Us</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-eyebrow">Trusted Government Contractor</p>
          <h1>Delivering Mission-Critical Solutions for the Public Sector</h1>
          <p className="hero-sub">
            Treepeak partners with federal, state, and local agencies to provide reliable, compliant, and cost-effective contracting services that advance the public mission.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Get in Touch</a>
            <a href="#services" className="btn-secondary">Our Services</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <p className="section-eyebrow">What We Do</p>
        <h2 className="section-title">Our Core Services</h2>
        <div className="cards">
          <div className="card">
            <div className="card-icon">&#128203;</div>
            <h3>Program Management</h3>
            <p>End-to-end program oversight ensuring on-time, on-budget delivery for government initiatives of all scales.</p>
          </div>
          <div className="card">
            <div className="card-icon">&#128187;</div>
            <h3>IT &amp; Technology Solutions</h3>
            <p>Modernizing agency systems with secure, scalable technology tailored to government compliance requirements.</p>
          </div>
          <div className="card">
            <div className="card-icon">&#128200;</div>
            <h3>Consulting &amp; Advisory</h3>
            <p>Strategic guidance to help agencies optimize operations, reduce costs, and meet evolving mandates.</p>
          </div>
          <div className="card">
            <div className="card-icon">&#128274;</div>
            <h3>Compliance &amp; Risk</h3>
            <p>Comprehensive compliance support to navigate federal regulations, audits, and security frameworks.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section section-alt">
        <div className="about-grid">
          <div className="about-text">
            <p className="section-eyebrow">About Treepeak</p>
            <h2 className="section-title left">Built for Government. Focused on Results.</h2>
            <p>
              Treepeak was founded with a singular purpose: to help government agencies accomplish more with confidence. With deep expertise across federal procurement frameworks and agency operations, our team brings the discipline and integrity the public sector demands.
            </p>
            <p>
              We hold ourselves to the highest standards of accountability, transparency, and performance — because we know the work we do serves the American public.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-num">10+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat">
              <span className="stat-num">50+</span>
              <span className="stat-label">Government Contracts</span>
            </div>
            <div className="stat">
              <span className="stat-num">100%</span>
              <span className="stat-label">Compliance Rate</span>
            </div>
            <div className="stat">
              <span className="stat-num">30+</span>
              <span className="stat-label">Agency Partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="section">
        <p className="section-eyebrow">Why Treepeak</p>
        <h2 className="section-title">Our Differentiators</h2>
        <div className="capabilities-list">
          <div className="capability">
            <span className="check">&#10003;</span>
            <div>
              <strong>GSA Schedule &amp; IDIQ Vehicle Experience</strong>
              <p>Proven track record navigating major government procurement vehicles efficiently.</p>
            </div>
          </div>
          <div className="capability">
            <span className="check">&#10003;</span>
            <div>
              <strong>Cleared Personnel</strong>
              <p>Staff holding active security clearances ready to support sensitive government work.</p>
            </div>
          </div>
          <div className="capability">
            <span className="check">&#10003;</span>
            <div>
              <strong>CMMC &amp; FedRAMP Aligned</strong>
              <p>Deep familiarity with federal cybersecurity frameworks and cloud authorization processes.</p>
            </div>
          </div>
          <div className="capability">
            <span className="check">&#10003;</span>
            <div>
              <strong>Small Business Designation</strong>
              <p>Eligible for set-aside contracts, providing agencies with flexible, agile partnership options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="section section-cta">
        <h2>Ready to Work Together?</h2>
        <p>Reach out to learn how Treepeak can support your agency's mission.</p>
        <a href="mailto:info@treepeak.com" className="btn-primary">info@treepeak.com</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <span>&copy; {new Date().getFullYear()} Treepeak. All rights reserved.</span>
      </footer>
    </>
  )
}

export default App
