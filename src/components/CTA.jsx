import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import "./cta.css"

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('cta');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta" className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className={`cta-title fade-in-left ${isVisible ? 'visible' : ''}`}>
            Discover Your Healthcare Solutions
          </h2>
          <p className={`cta-subtitle fade-in-right ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            Explore how PulseOne can transform your healthcare experience.
          </p>
        </div>

        <div className={`cta-buttons fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
          <button className="btn">
            Learn More
           </button>
          <button className="btn second">
            Get Demo
          </button>
        </div>
      </div>
    </section>
  );
}