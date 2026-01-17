import "../styles/Projects.css"

export default function Projects() {
  const projects = [
    {
      title: "ExamPrep",
      image: "/1.jpg",
      description:
        "A modern, responsive corporate website designed to perform and manage all tasks regarding to exam .",
      tech: ["React", "Node", "Responsive Design"],
      category: "Software"
    },
    {
      title: "Automated Bus Scheduling and Route management System",
      image: "/2.jpg",
      description:
        "Dynamic Bus Scheduling: Admins can create and modify bus schedules with assigned routes and timings in real time.",
      tech: ["React", "Node.js", "MongoDB"],
      category: "Web Application"
    },
    {
      title: "E-Commerce Platform",
      image: "/4.png",
      description:
        "A scalable e-commerce solution with product management and order tracking.",
      tech: ["React", "Express", "Payment Gateway"],
      category: "E-Commerce"
    },
    {
      title: "UI / UX Redesign Project",
      image: "/7.png",
      description:
        "Complete UI/UX redesign to improve user engagement and conversion rate.",
      tech: ["Figma", "UX Research", "Prototyping"],
      category: "UI / UX"
    }
  ]

  return (
    <main className="projects-page">

      {/* HERO */}
      <section className="projects-hero">
        <h1>Our Projects</h1>
        <p>
          A showcase of solutions we have built for businesses across
          different industries.
        </p>
      </section>

      {/* PROJECTS GRID */}
      <section className="projects-section">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <span className="project-category">{project.category}</span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="projects-cta">
        <h2>Have a Project in Mind?</h2>
        <p>
          Let’s discuss how Datara Softwares can help turn your idea
          into a successful digital product.
        </p>
        <a href="/contact" className="cta-btn">Start Your Project</a>
      </section>

    </main>
  )
}
