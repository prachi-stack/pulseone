import React, { useState, useEffect } from 'react';
import './HowItWorks.css';

const steps = [
  {
    id: 1,
    title: "Connect",
    description: "Link hospitals, families, and healthcare providers through our unified platform"
  },
  {
    id: 2,
    title: "Optimize",
    description: "Streamline operations and eliminate inefficiencies across the healthcare journey"
  },
  {
    id: 3,
    title: "Finance",
    description: "Provide transparent pricing and innovative financing solutions for accessible care"
  },
  {
    id: 4,
    title: "Transform",
    description: "Revolutionize healthcare delivery with improved outcomes and patient satisfaction"
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  // Auto-advance steps every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % 4) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="how-it-works-container">
      {/* Section Header */}
      <div className="section-header">
        <h2>The Future With PulseOne</h2>
        <p>A strategic four-step approach to healthcare transformation, powered by innovation and illustrated by our vision</p>
      </div>

      {/* Steps Grid */}
      <div className="steps-grid">
        {/* Step 1 - Connect */}
        <div className={`step step-1 ${activeStep === 1 ? 'active' : ''}`}>
          <div className="step-number">1</div>
          <h3>{steps[0].title}</h3>
          <p>{steps[0].description}</p>
        </div>

         
        {/* Step 2 - Optimize */}
        <div className={`step step-2 ${activeStep === 2 ? 'active' : ''}`}>
          <div className="step-number">2</div>
          <h3>{steps[1].title}</h3>
          <p>{steps[1].description}</p>
        </div>

        
        <div></div> {/* Empty space for grid alignment */}

        {/* Step 4 - Transform */}
        <div className={`step step-4 ${activeStep === 4 ? 'active' : ''}`}>
          <div className="step-number">4</div>
          <h3>{steps[3].title}</h3>
          <p>{steps[3].description}</p>
        </div>

         

        {/* Step 3 - Finance */}
        <div className={`step step-3 ${activeStep === 3 ? 'active' : ''}`}>
          <div className="step-number">3</div>
          <h3>{steps[2].title}</h3>
          <p>{steps[2].description}</p>
        </div>
      </div>
    </div>
  );
}