import { Link } from "react-router-dom"
import "../styles/NotFound.css"

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="notfound-container">

        <h1>404</h1>
        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <Link to="/" className="notfound-btn">
          Go Back to Home
        </Link>

      </div>
    </section>
  )
}
