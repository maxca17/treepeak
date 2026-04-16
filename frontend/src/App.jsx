import './App.css'

function App() {
  return (
    <>
      {/* Nav */}
      <nav className="nav">
        <a href="/" className="nav-logo">Treepeak</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-body">
          <span className="hero-kicker">Federal Contracting Services</span>
          <h1>Serious work for agencies that can't afford mistakes.</h1>
          <p>
            Treepeak provides program management, IT delivery, and compliance
            services to government clients. Small team, high standards,
            no hand-offs to junior staff.
          </p>
          <a href="#contact" className="hero-cta">
            Get in touch <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="hero-panel" aria-hidden="true" />
      </section>

      {/* Services */}
      <section id="services" className="services">
        <div className="services-inner">
          <span className="section-label">Services</span>
          <div className="service-list">
            <div className="service-row">
              <span className="service-n">01</span>
              <div>
                <h3>Program Management</h3>
                <p>
                  We run the whole thing — timeline, budget, stakeholder
                  coordination. We take ownership so your team can stay
                  focused on mission delivery, not contract administration.
                </p>
              </div>
            </div>
            <div className="service-row">
              <span className="service-n">02</span>
              <div>
                <h3>Technology Delivery</h3>
                <p>
                  From legacy modernization to new cloud environments, we build
                  and ship government IT that works. Our teams are FedRAMP and
                  CMMC-ready from day one.
                </p>
              </div>
            </div>
            <div className="service-row">
              <span className="service-n">03</span>
              <div>
                <h3>Strategic Advisory</h3>
                <p>
                  Before you commit to a contract vehicle or acquisition
                  strategy, talk to us. We've seen what works and what wastes
                  time — and we'll tell you honestly which is which.
                </p>
              </div>
            </div>
            <div className="service-row">
              <span className="service-n">04</span>
              <div>
                <h3>Compliance &amp; Risk</h3>
                <p>
                  Audits, security frameworks, and federal regulations move
                  fast. We keep you current and prepared so nothing slips
                  through the cracks before a review or renewal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="about-inner">
          <div className="about-copy">
            <span className="section-label-dark">About</span>
            <h2>Built small, on purpose.</h2>
            <p>
              Treepeak started when two former agency contractors decided the
              work deserved better — better communication, cleaner
              deliverables, fewer surprises at the end of a period of
              performance. That's still what we're about.
            </p>
            <p>
              We stay small deliberately. Every engagement gets a senior
              person, start to finish. We don't take on more than we can do
              well, which means when we say yes, we mean it.
            </p>
          </div>
          <div className="about-figures">
            <div className="figure">
              <span className="figure-label">Founded</span>
              <span className="figure-value">2014</span>
            </div>
            <div className="figure">
              <span className="figure-label">Contracts Delivered</span>
              <span className="figure-value">60+</span>
            </div>
            <div className="figure">
              <span className="figure-label">Security Clearances</span>
              <span className="figure-value">Active</span>
            </div>
            <div className="figure">
              <span className="figure-label">Business Designation</span>
              <span className="figure-value">SBA Small Business</span>
            </div>
          </div>
        </div>
        <div className="about-certs">
          <p>
            GSA Schedule holder &nbsp;·&nbsp; CMMC Level 2 aligned &nbsp;·&nbsp;
            IDIQ vehicle experience &nbsp;·&nbsp; Active TS/SCI clearances available
          </p>
        </div>
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
        <span>© {new Date().getFullYear()} Treepeak</span>
        <span>All rights reserved</span>
      </footer>
    </>
  )
}

export default App
