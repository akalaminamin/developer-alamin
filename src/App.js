import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./shared/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Testimonial from "./pages/Testimonial/Testimonial";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
function App() {
  return (
    <>
      {/* <h1>In the name of Allah</h1> */}
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
