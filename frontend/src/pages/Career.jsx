import "../styles/Career.css"

export default function Career() {
  return (
    <section className="career">

      {/* HERO */}
      <div className="career-hero">
        <h1>Build Your Career With Datara Softwares</h1>
        <p>
          Join a passionate team of developers, designers, and problem solvers
          working on meaningful digital solutions.
        </p>
      </div>

      {/* WHY JOIN US */}
      <div className="career-section">
        <h2>Why Work With Us</h2>

        <div className="career-benefits">
          <div className="benefit-card">
            <h4>Growth-Oriented Culture</h4>
            <p>We invest in learning, mentoring, and long-term career growth.</p>
          </div>

          <div className="benefit-card">
            <h4>Real-World Projects</h4>
            <p>Work on live client projects that create real business impact.</p>
          </div>

          <div className="benefit-card">
            <h4>Supportive Team</h4>
            <p>Collaborative environment with experienced professionals.</p>
          </div>

          <div className="benefit-card">
            <h4>Flexible Work</h4>
            <p>Hybrid & remote-friendly work culture with flexibility.</p>
          </div>
        </div>
      </div>

      {/* OPEN POSITIONS */}
      <div className="career-section dark">
        <h2>Open Positions</h2>

        <div className="job-list">
          <div className="job-card">
            <h4>Frontend Developer (React)</h4>
            <p>Experience: 1–3 Years</p>
            <span>Location: Remote / On-site</span>
          </div>

          <div className="job-card">
            <h4>Backend Developer (Node.js)</h4>
            <p>Experience: 2+ Years</p>
            <span>Location: Remote / On-site</span>
          </div>

          <div className="job-card">
            <h4>UI / UX Designer</h4>
            <p>Experience: 1–2 Years</p>
            <span>Location: Remote</span>
          </div>
        </div>
      </div>

      {/* HOW TO APPLY */}
      <div className="career-section">
        <h2>How to Apply</h2>
        <p className="apply-text">
          Send your resume and portfolio to:
          <br />
          <strong>careers@datarasoftwares.com</strong>
        </p>
        <p className="apply-sub">
          Our HR team will review your profile and contact you if it matches
          our requirements.
        </p>
      </div>

    </section>
  )
}
