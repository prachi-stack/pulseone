import React, { useState, useEffect, useRef } from 'react';
import "./pillars.css"

const cards = [
  {
    id: 1,
    title: "PulseOne Unity",
    description: "Connects hospitals into one living system. Even the smallest clinic becomes part of India's largest healthcare network. Collaborate, don't compete."
  },
  {
    id: 2,
    title: "PulseOne Lifeline",
    description: "Ensures money never stops treatment. Instant healthcare loans with transparent terms. No family chooses between treatment and survival."
  },
  {
    id: 3,
    title: "PulseOne Compass",
    description: "Guides patients to the right care. Compare costs, find specialists, book ambulances. Clear guidance when families need it most."
  },
  {
    id: 4,
    title: "PulseOne Promise",
    description: "Gives families ongoing security and trust. Healthcare card with nationwide access, discounts, and financing—peace of mind in your pocket."
  }
];

export default function Pillars() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  
  const carouselRef = useRef(null);
  const rotationInterval = useRef(null);

  // Responsive settings
  const getResponsiveSettings = () => {
    const width = window.innerWidth;
    if (width <= 320) return { rotationStep: 90, radius: 180 };
    if (width <= 375) return { rotationStep: 90, radius: 200 };
    if (width <= 480) return { rotationStep: 90, radius: 220 };
    if (width <= 600) return { rotationStep: 90, radius: 260 };
    if (width <= 768) return { rotationStep: 90, radius: 300 };
    if (width <= 1024) return { rotationStep: 90, radius: 350 };
    return { rotationStep: 90, radius: 380 };
  };

  const setCardPositions = () => {
    const { rotationStep, radius } = getResponsiveSettings();
    const carouselElement = carouselRef.current;
    if (!carouselElement) return;

    const cardElements = carouselElement.querySelectorAll('.pillars-carousel-card');
    cardElements.forEach((card, i) => {
      const rotateY = i * rotationStep;
      const angleRad = (rotateY * Math.PI) / 180;
      const x = Math.sin(angleRad) * radius;
      const z = Math.cos(angleRad) * radius;
      
      let transform = `translateX(${x}px) translateZ(${z}px) rotateY(${rotateY}deg)`;
      
      // Apply scaling based on current card and hover state
      if (i === currentCardIndex) {
        if (hoveredCardIndex === i) {
          transform += " scale(1.4)"; // Extra zoom when hovering current card
        } else {
          transform += " scale(1.2)"; // Normal current card scale
        }
        card.style.zIndex = "2";
      } else if (hoveredCardIndex === i) {
        transform += " scale(1.15)"; // Hover zoom for non-current cards
        card.style.zIndex = "1";
      } else {
        card.style.zIndex = "0";
      }
      
      card.style.transform = transform;
    });

    // Rotate carousel
    const rotateDeg = -rotationStep * currentCardIndex;
    carouselElement.style.transform = `rotateY(${rotateDeg}deg)`;
  };

  const startRotation = () => {
    if (rotationInterval.current) return;
    rotationInterval.current = setInterval(() => {
      setCurrentCardIndex((prev) => (prev + 1) % cards.length);
    }, 1400);
  };

  const stopRotation = () => {
    if (rotationInterval.current) {
      clearInterval(rotationInterval.current);
      rotationInterval.current = null;
    }
  };

  useEffect(() => {
    setCardPositions();
    if (hoveredCardIndex === null) {
      startRotation();
    }

    const handleResize = () => {
      setCardPositions();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      stopRotation();
      window.removeEventListener('resize', handleResize);
    };
  }, [currentCardIndex, hoveredCardIndex]);

  const handleMouseEnter = () => {
    stopRotation();
  };

  const handleMouseLeave = () => {
    setHoveredCardIndex(null);
    startRotation();
  };

  const handleCardMouseEnter = (cardIndex) => {
    setHoveredCardIndex(cardIndex);
    stopRotation();
  };

  const handleCardMouseLeave = () => {
    setHoveredCardIndex(null);
    startRotation();
  };

  return (
    <div className="pillars-wrapper">
      {/* Section Header */}
      <div className="pillars-section-container">
        <h1 className="pillars-section-title">
          Four Pillars. One Heartbeat. Complete Healthcare Access.
        </h1>
        <p className="pillars-section-subtitle">
          From village clinic to city hospital, seamless care, transparent costs, instant financing.
        </p>
      </div>

      {/* 3D Carousel */}
      <div className="pillars-carousel-container">
        <div className="pillars-scene">
          <div
            className="pillars-carousel"
            ref={carouselRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleMouseEnter}
            onTouchEnd={handleMouseLeave}
          >
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="pillars-carousel-card"
                onMouseEnter={() => handleCardMouseEnter(index)}
                onMouseLeave={handleCardMouseLeave}
              >
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}