"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import "./problem.css";
import problm1 from "/problm1.png";
import problm2 from "/problm2.png";
import problm3 from "/problm3.png";
import problm4 from "/problm4.png";

// Hook for intersection observer animation
const useIntersectionObserver = (elementRef, threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return isVisible;
};

export default function Problems() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);

  // Carousel states
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);

  const carouselRef = useRef(null);

  const problems = [
    {
      id: "1",
      image: problm1,
      title: "Fragmented systems waste precious time",
      description:
        "Care remains disjointed, making it difficult for patients to navigate their healthcare journeys.",
    },
    {
      id: "2",
      image: problm2,
      title: "Hidden costs force families into debt",
      description:
        "Patients often encounter hidden costs and financing challenges that delay treatment.",
    },
    {
      id: "3",
      image: problm3,
      title: "No referral network means delayed treatments",
      description: "Hospitals frequently fail to work together, impacting patient care.",
    },
    {
      id: "4",
      image: problm4,
      title: "Financial barriers make care unaffordable",
      description: "Rural patients often struggle to find nearby quality care.",
    },
  ];

  // Responsive breakpoints
  const getItemsPerSlide = useCallback(() => {
    if (windowWidth >= 1024) return problems.length; // Desktop: grid
    if (windowWidth >= 768) return 2; // Tablet: 2 items per slide
    return 1; // Mobile: 1 item per slide
  }, [windowWidth, problems.length]);

  const itemsPerSlide = getItemsPerSlide();
  const isCarouselMode = windowWidth < 1024;
  const totalSlides = isCarouselMode
    ? Math.ceil(problems.length / itemsPerSlide)
    : 1;

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide
  useEffect(() => {
    if (!isCarouselMode || isHovered) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isCarouselMode, isHovered, totalSlides]);

  // Touch swipe
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
  };

  const nextSlide = () => {
    if (!isCarouselMode) return;
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    if (!isCarouselMode) return;
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    if (!isCarouselMode) return;
    setCurrentSlide(index);
  };

  // Card component
  const renderCard = (item, index) => (
    <div key={item.id} className="problem-card">
      <div className="problem-image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="problem-content">
        <div className="prob">
          <h3 className="problem-title">{item.title}</h3>
        <p className="problem-description">{item.description}</p>
        </div>
      </div>
    </div>
  );

  const renderCarousel = () => (
    <div
      className={`carousel-container ${isVisible ? "visible" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-wrapper">
        <div
          ref={carouselRef}
          className="carousel-content"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {Array.from({ length: totalSlides }, (_, slideIndex) => (
            <div
              key={slideIndex}
              className="carousel-slide"
              style={{ gridTemplateColumns: `repeat(${itemsPerSlide}, 1fr)` }}
            >
              {problems
                .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                .map((item, idx) => (
                  <div key={item.id} className="carousel-item">
                    {renderCard(item, slideIndex * itemsPerSlide + idx)}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      {windowWidth >= 768 && (
        <>
          <button onClick={prevSlide} className="nav-button prev">
            <svg
              className="nav-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button onClick={nextSlide} className="nav-button next">
            <svg
              className="nav-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}

      {/* Dots */}
      {totalSlides > 1 && (
        <div className="dot-indicators">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`dot ${index === currentSlide ? "active" : ""}`}
            />
          ))}
        </div>
      )}
    </div>
  );

  const renderGrid = () => (
    <div className={`problems-grid ${isVisible ? "visible" : ""}`}>
      {problems.map((item, index) => renderCard(item, index))}
    </div>
  );

  return (
    <section ref={sectionRef} className="problems-section">
      <div className="problems-container">
        {/* Header */}
        <div className={`problems-header ${isVisible ? "visible" : ""}`}>
          <h2 className="problems-title">Problems We're Looking To Solve</h2>
          <p className="problems-subtitle">
            Addressing the critical challenges in modern healthcare delivery
          </p>
        </div>

        {/* Responsive Layout */}
        {isCarouselMode ? renderCarousel() : renderGrid()}
      </div>
    </section>
  );
}
