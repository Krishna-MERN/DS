import { BrowserRouter, Routes, Route } from "react-router-dom"

/* Common Layout */
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

/* Pages */
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Projects from "./pages/Projects"
import Career from "./pages/Career"
// import Contact from "./pages/Contact"

/* Optional */
// import NotFound from "./pages/NotFound"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/career" element={<Career />} />
        {/* <Route path="/contact" element={<Contact />} /> */}

        {/* 404 fallback */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}
