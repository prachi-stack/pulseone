import { useState, useEffect } from "react";
import "./faq.css"
import { useNavigate } from "react-router-dom";


export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState('');
  const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
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

    const element = document.getElementById('faqs');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleToggle = (value) => {
    setOpenFAQ(openFAQ === value ? '' : value);
  };

  const faqs = [
    {
      value: "item-1",
      question: "What is PulseOne?",
      answer: "PulseOne is an integrated healthcare ecosystem designed to connect hospitals, patients, and financial partners. Our platform enhances accessibility and transparency in healthcare. We aim to ensure that everyone receives quality care, regardless of their location.",
    },
    {
      value: "item-2",
      question: "How does it work?",
      answer: "PulseOne operates through four key product lines that streamline hospital management, patient financing, and care navigation. Hospitals can manage operations digitally while patients can easily discover and compare healthcare options. This interconnected system fosters collaboration and improves patient outcomes.",
    },
    {
      value: "item-3",
      question: "Who can use it?",
      answer: "PulseOne is designed for hospitals, patients, and financial partners alike. Whether you are a healthcare provider looking to enhance your services or a patient seeking affordable care, our platform caters to your needs. We empower all stakeholders in the healthcare ecosystem.",
    },
    {
      value: "item-4",
      question: "Is it affordable?",
      answer: "Yes, PulseOne offers streamlined financing options that allow patients to access affordable care. With instant loan approvals and flexible repayment plans, we remove financial barriers to treatment. Our goal is to make healthcare accessible for everyone.",
    },
    {
      value: "item-5",
      question: "How to get started?",
      answer: "Getting started with PulseOne is simple. You can sign up on our website or contact us for more information. Our team is ready to assist you in navigating the healthcare landscape.",
    }
  ];

  return (
    <section id="faqs" className="faqs-section">
      <div className="faqs-container">
        <div className={`faqs-header fade-in-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="faqs-title">
            FAQs
          </h2>
          <p className="faqs-subtitle">
            Find answers to common questions about PulseOne and our healthcare solutions.
          </p>
        </div>

        <div className={`fade-in-right ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '300ms' }}>
          <div className="faqs-accordion">
            {faqs.map((faq) => (
              <div
                key={faq.value}
                className={`faq-item ${openFAQ === faq.value ? 'open' : ''}`}
              >
                <button
                  className="faq-trigger"
                  onClick={() => handleToggle(faq.value)}
                >
                  {faq.question}
                  <span className={`accordion-icon ${openFAQ === faq.value ? 'open' : ''}`}>
                    {openFAQ === faq.value ? '−' : '+'}
                  </span>
                </button>
                <div 
                  className="faq-content"
                  style={{
                    maxHeight: openFAQ === faq.value ? '500px' : '0',
                    opacity: openFAQ === faq.value ? 1 : 0
                  }}
                >
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Still have questions CTA */}
        <div className={`faqs-cta fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '600ms' }}>
          <h3 className="faqs-cta-title">
            Still have questions?
          </h3>
          <p className="faqs-cta-subtitle">
            Reach out to our support team for assistance.
          </p>
         <button className="btn" onClick={() => navigate("/contact")}>
            Contact
          </button>
        </div>
      </div>
    </section>
  );
}