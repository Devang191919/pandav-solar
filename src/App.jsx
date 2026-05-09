// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./pages/Home";

import Contact from "./pages/Contact";
import Header from "./components/Header";
import Services from "./pages/Services";
import About from "./pages/About";

import Inquiry from "./pages/Inquiry";
import FAQ from "./pages/FAQ";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
