import React, { useEffect, useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [stars, setStars] = useState([]);
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Stars generation logic (same as before)
    const newStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      size: Math.random() * 2 + 'px',
      duration: (Math.random() * 3 + 2) + 's',
      delay: Math.random() * 5 + 's'
    }));
    setStars(newStars);

    // Scroll Animation Logic
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // 0 se 500px scroll tak scale 1 se 0.7 tak jayega
      const newScale = Math.max(0.7, 1 - scrollY / 1500); 
      const newOpacity = Math.max(0, 1 - scrollY / 800);
      
      setScale(newScale);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-container">
      {/* Background Stars */}
      <div className="stars-bg">
        {stars.map(star => (
          <div 
            key={star.id} 
            className="star-dot" 
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDuration: star.duration,
              animationDelay: star.delay
            }}
          />
        ))}
      </div>

      {/* Animated Wrapper - Ye scroll hone par chhota hoga */}
      <div 
        className="hero-inner" 
        style={{ 
          transform: `scale(${scale})`, 
          opacity: opacity,
          transition: 'transform 0.1s ease-out' // Smoothness ke liye
        }}
      >
        <div className="text-box">
          <h1 className="name-outline">ABHINAV SAINI</h1>
          <div className="animated-strike"></div>
        </div>
        <p className="role-tag">SENIOR FRONT-END ENGINEER</p>
      </div>
    </section>
  );
};

export default HeroSection;