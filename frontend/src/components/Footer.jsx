import { Link } from "react-router-dom"
import "../styles/Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-brand">
          <img src="/logo.png" alt="Datara Softwares" />
          <p>
            Datara Softwares is a technology-driven software company delivering
            reliable, scalable and modern digital solutions for businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/career">Career</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Services */}
        <div className="footer-links">
          <h4>Services</h4>
          <Link to="/services">Website Development</Link>
          <Link to="/services">Web Applications</Link>
          <Link to="/services">UI / UX Design</Link>
          <Link to="/services">Maintenance & Support</Link>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📍 Uttar Pradesh, India</p>
          <a
  href="https://wa.me/917985687221"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-btn"
>
  <p>📞 +91 79856 87221</p>
</a>

          
          <p>✉ Support@ds.com</p>

          <div className="footer-socials">
            <a href="#" aria-label="WhatsApp">WA</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="LinkedIn">IN</a>
            <a href="#" aria-label="YouTube">YT</a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Datara Softwares. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
