import React, { useState, useEffect } from 'react';
import './blogslider.css';

const slides = [
  {
    id: 1,
    title: "For Hospitals",
    text: "PulseOne bridges the gap between patients and healthcare providers, ensuring everyone has access to quality care. Our platform simplifies the healthcare journey by connecting users with the right resources and support.",
    image: "/x.png",
    alt: "Hospital Building",
    date: "15 January 2025"
  },
  {
    id: 2,
    title: "For Families",
    text: "With our user-friendly app, patients can easily discover hospitals, compare costs, and track their care journey. This transparency empowers patients to make informed decisions about their health.",
    image: "/y.png",
    alt: "Family Healthcare",
    date: "20 January 2025"
  },
  {
    id: 3,
    title: "For Healthcare Access",
    text: "PulseOne offers embedded financing options, providing patients with instant loan approvals and flexible payment plans. This ensures that financial barriers do not hinder access to necessary treatments.",
    image: "/z.png",
    alt: "Medical Financing",
    date: "25 January 2025"
  }
];

export default function Benefits() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      // Scroll down - next slide
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else {
      // Scroll up - previous slide
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <div className='benefitparent'  
    >
      <div className="top">
        <h1 className="">
          Transform Every Healthcare Journey Into A <br className="" />Success Story
        </h1>
        <p className="">
          Discover how PulseOne creates value for every stakeholder in the healthcare ecosystem
        </p>
      </div>
      <div className="blog-slider" onWheel={handleWheel}>
        <div className="blog-slider__wrp">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`blog-slider__item ${
                index === currentSlide ? 'swiper-slide-active' : ''
              }`}
            >
              <div className="blog-slider__img">
                <img src={slide.image} alt={slide.alt} />
              </div>
              <div className="blog-slider__content">
                <div className="blog-slider__title">{slide.title}</div>
                <div className="blog-slider__text">{slide.text}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="blog-slider__pagination">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`swiper-pagination-bullet ${
                index === currentSlide ? 'swiper-pagination-bullet-active' : ''
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}