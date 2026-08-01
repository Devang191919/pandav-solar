import { useCallback, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Services from "./pages/Services";
import About from "./pages/About";
import Inquiry from "./pages/Inquiry";
import FAQ from "./pages/FAQ";
import Projects from "./pages/Projects";
import Warranty from "./pages/Warranty";
import Subsidy from "./pages/Subsidy";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import MobileActionBar from "./components/MobileActionBar";
import SplashScreen, { shouldShowSplash } from "./components/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(() => shouldShowSplash());

  const handleSplashDone = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onDone={handleSplashDone} />}
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/subsidy" element={<Subsidy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <MobileActionBar />
      </Router>
    </>
  );
}

export default App;
