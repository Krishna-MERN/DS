import React, { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/Navbar.css"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [serviceOpen, setServiceOpen] = useState(false)
  const serviceRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (serviceRef.current && !serviceRef.current.contains(event.target)) {
        setServiceOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
        
            <img src="/logo.png" alt="Datara Softwares" />
          </Link>
        </div>

        {/* Menu */}
        <nav className={`navbar-menu ${menuOpen ? "open" : ""}`}>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          {/* Services Dropdown */}
          <div
            className="dropdown"
            ref={serviceRef}
            onMouseEnter={() => setServiceOpen(true)}
          >
            <Link to="/services"><span className="dropdown-title">Services</span></Link>

            <div className={`dropdown-menu ${serviceOpen ? "show" : ""}`}>
              <Link to="/services">Website Development</Link>
              <Link to="/services">UI / UX Design</Link>
              <Link to="/services">Web Applications</Link>
              <Link to="/services">Maintenance & Support</Link>
            </div>
          </div>

          <Link to="/projects">Projects</Link>
          <Link to="/career">Career</Link>
          <Link to="https://wa.me/917985687221"
  target="_blank"
  rel="noopener noreferrer"
  className="nav-btn">Contact Us</Link>

        </nav>

        {/* Mobile Toggle */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>

      </div>
    </header>
  )
}
