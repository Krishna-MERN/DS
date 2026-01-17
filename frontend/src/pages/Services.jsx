import "../styles/Services.css"

export default function Services() {
  return (
    <main className="services-page">

      {/* HERO */}
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>
          We deliver modern, scalable and result-driven digital solutions
          tailored to your business goals.
        </p>
      </section>

      {/* SERVICES LIST */}
      <section className="services-list">

        {/* SERVICE 1 */}
        <div className="service-block">
          <div className="service-image">
            <img src="/2.jpg" alt="Website Development" />
          </div>

          <div className="service-content">
            <h2>Website Development</h2>
            <p>
              We design and develop high-performance websites that reflect
              your brand identity, build trust and convert visitors into customers.
            </p>

            <ul >
              <li>● Custom business websites</li>
              <li>● Landing pages & portfolios</li>
              <li>● SEO-optimized & fast loading</li>
              <li>● Responsive for all devices</li>
            </ul>
          </div>
        </div>

        {/* SERVICE 2 */}
        <div className="service-block reverse">
          <div className="service-image">
            <img src="/5.jpg" alt="Web Applications" />
          </div>

          <div className="service-content">
            <h2>Web Applications</h2>
            <p>
              We build secure, scalable web applications that streamline
              business operations and improve productivity.
            </p>

            <ul>
              <li>● Admin dashboards</li>
              <li>● CRM & ERP systems</li>
              <li>● SaaS platforms</li>
              <li>● Authentication & data security</li>
            </ul>
          </div>
        </div>

        {/* SERVICE 3 */}
        <div className="service-block">
          <div className="service-image">
            <img src="/4.png" alt="UI UX Design" />
          </div>

          <div className="service-content">
            <h2>UI / UX Design</h2>
            <p>
              A great design is more than visuals. We craft intuitive user
              experiences that enhance engagement and usability.
            </p>

            <ul>
              <li>● User-centric design approach</li>
              <li>● Wireframes & prototypes</li>
              <li>● Conversion-focused layouts</li>
              <li>● Modern, clean interfaces</li>
            </ul>
          </div>
        </div>

        {/* SERVICE 4 */}
        <div className="service-block reverse">
          <div className="service-image">
            <img src="/3.png" alt="Maintenance & Support" />
          </div>

          <div className="service-content">
            <h2>Maintenance & Support</h2>
            <p>
              We provide ongoing support to ensure your website or application
              remains secure, updated and running smoothly.
            </p>

            <ul>
              <li>● Regular updates & backups</li>
              <li>● Performance optimization</li>
              <li>● Bug fixing & monitoring</li>
              <li>● Long-term technical support</li>
            </ul>
          </div>
        </div>
        <div className="tag">
<h2>
“Datara Softwares helps businesses build strong digital presence through custom websites and scalable software solutions.”</h2></div>
      </section>

      {/* TRUST SECTION */}
      <section className="services-trust">
        <h2>Why Choose Datara Softwares?</h2>

        <div className="trust-grid">
          <div>
            <h3>✔ Experienced Team</h3>
            <p>Skilled developers focused on quality and reliability.</p>
          </div>
          <div>
            <h3>✔ Transparent Process</h3>
            <p>Clear communication at every stage of the project.</p>
          </div>
          <div>
            <h3>✔ Business-Focused Solutions</h3>
            <p>We build solutions that help you grow and scale.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <h2>Let’s Build Something Great Together</h2>
        <p>
          Discuss your project with us and get a free consultation today.
        </p>
        <a href="/contact" className="cta-btn">Contact Us</a>
      </section>

    </main>
  )
}
