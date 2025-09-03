import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import Benefits from './components/Benefits'
import Footer from './components/Footer'
import FAQSection from './components/FAQ'
import CTASection from './components/CTA'
import HowItWorks from './components/HowITWorks'
import Problems from './components/Problems'
import Pillars from './components/Pillars'
import Contact from './components/Contact';

const App = () => {
  return (
<Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="container">
            <div id="hero">
              <HeroSection />
            </div>
            <div id="problems">
              <Problems />
            </div>
            <div id="benefits">
              <Benefits />
            </div>
            <div id="pillars">
              <Pillars />
            </div>
            <div id="howitworks">
              <HowItWorks />
            </div>
            <div id="faq">
              <FAQSection />
            </div>
            <CTASection />
            <Footer />
          </div>
        } />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App