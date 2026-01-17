import "../styles/HomeServices.css"

export default function HomeServices() {
  return (
    <section className="split-services">
      <div className="split-services-container">

        {/* LEFT IMAGE */}
        <div className="split-services-image">
          <img
            src="/8.png"
            alt="Datara Softwares Services"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="split-services-content">
          <h2>Our Expertise & Services</h2>
          <p className="subtitle">
            We help businesses grow with reliable, scalable and modern
            digital solutions built for long-term success.
          </p>

          <div className="service-list">
            <div className="service-item">
              <span>01</span>
              <div>
                <h4>Website Development</h4>
                <p>
                  High-performance websites focused on speed, security
                  and conversion.
                </p>
              </div>
            </div>

            <div className="service-item">
              <span>02</span>
              <div>
                <h4>Web Applications</h4>
                <p>
                  Custom dashboards, admin panels and SaaS products
                  tailored to your business.
                </p>
              </div>
            </div>

            <div className="service-item">
              <span>03</span>
              <div>
                <h4>UI / UX Design</h4>
                <p>
                  User-centric designs that improve engagement
                  and usability.
                </p>
              </div>
            </div>

            <div className="service-item">
              <span>04</span>
              <div>
                <h4>Maintenance & Support</h4>
                <p>
                  Continuous monitoring, updates and technical
                  support you can rely on.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
