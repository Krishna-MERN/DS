import "../styles/About.css"

export default function About() {
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Datara Softwares</h1>
          <p>
            Building reliable, scalable and future-ready digital solutions
            for growing businesses.
          </p>
        </div>
      </section>

      {/* COMPANY BIO */}
      <section className="about-section light">
        <div className="about-grid">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              Datara Softwares is a technology-driven software company focused on
              delivering modern digital solutions that empower businesses to grow
              and scale confidently in the digital era.
            </p>
            <p>
              We specialize in building secure, performance-oriented websites and
              web applications with a strong focus on user experience, business
              logic, and long-term scalability.
            </p>
          </div>

          <div className="about-image">
            <img src="/10.jpg" alt="Our Team" />
          </div>
        </div>
      </section>

      {/* LEGACY */}
      <section className="about-section dark">
        <h2>Our Journey & Legacy</h2>
        <p className="center-text">
          Founded with a vision to simplify technology for businesses,
          Datara Softwares has grown by delivering quality, transparency,
          and trust in every project we undertake.
        </p>

        <div className="legacy-grid">
          <div className="legacy-card">
            <h3>Vision</h3>
            <p>
              To become a trusted technology partner for businesses worldwide.
            </p>
          </div>
          <div className="legacy-card">
            <h3>Mission</h3>
            <p>
              Deliver high-quality digital products that solve real business problems.
            </p>
          </div>
          <div className="legacy-card">
            <h3>Values</h3>
            <p>
              Integrity, innovation, reliability and long-term partnership.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="about-section light">
        <h2>Our Expertise</h2>

        <div className="expertise-grid">
          <div className="expertise-card">Website Development</div>
          <div className="expertise-card">Web Applications</div>
          <div className="expertise-card">UI / UX Design</div>
          <div className="expertise-card">Backend & APIs</div>
          <div className="expertise-card">Database Management</div>
          <div className="expertise-card">Maintenance & Support</div>
        </div>
      </section>

      {/* TRUST */}
      <section className="about-section trust">
        <h2>Why Clients Trust Us</h2>

        <div className="trust-grid">
          <div className="trust-card">
            <h3>Transparent Communication</h3>
            <p>
              Clear timelines, honest updates and no hidden costs.
            </p>
          </div>
          <div className="trust-card">
            <h3>Quality-First Approach</h3>
            <p>
              We follow best practices to ensure performance and security.
            </p>
          </div>
          <div className="trust-card">
            <h3>Long-Term Support</h3>
            <p>
              Our relationship doesn’t end after project delivery.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="about-section light">
        <h2>Our Team</h2>
        <p className="center-text">
          A team of passionate developers, designers and problem-solvers
          dedicated to delivering excellence.
        </p>

        <div className="team-grid">
          <div className="team-card">
            <img src="/3.png" alt="Developer" />
            <h4>Engineering Team</h4>
            <p>Building scalable and secure systems.</p>
          </div>

          <div className="team-card">
            <img src="/4.png" alt="Design" />
            <h4>Design Team</h4>
            <p>Crafting intuitive and engaging experiences.</p>
          </div>

          <div className="team-card">
            <img src="/7.png" alt="Support" />
            <h4>Support Team</h4>
            <p>Ensuring long-term reliability and growth.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Let’s Work Together</h2>
        <p>
          Partner with Datara Softwares to build solutions that grow your business.
        </p>
        <a href="/contact" className="cta-btn">Contact Us</a>
      </section>

    </main>
  )
}
