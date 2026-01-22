import { Link } from "react-router-dom";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title">
          Building Digital Products <br />
          <span>That Drive Business Growth</span>
        </h1>

        <p className="hero-subtitle">
          Datara Softwares is a professional software development agency
          delivering modern websites and scalable applications for businesses
          that value quality, performance, and long-term success.
        </p>

        <div className="hero-actions">
          <a
            href="https://wa.me/917985687221"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Get Free Consultation
          </a>
          <Link to="/projects"  className="btn-secondary">  View Our Work</Link>
         
          
          
        </div>
      </div>

      {/* Decorative animated element */}
      <div className="hero-glow" />
    </section>
  );
}
