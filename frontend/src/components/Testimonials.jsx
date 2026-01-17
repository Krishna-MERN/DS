import "../styles/Testimonials.css"

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>

      <div className="testimonial-grid">
        <div className="testimonial-card">
          “Datara Softwares delivered beyond expectations.”
          <span>— Business Owner</span>
        </div>
        <div className="testimonial-card">
          “Professional, reliable and highly skilled team.”
          <span>— Startup Founder</span>
        </div>
      </div>
    </section>
  )
}
