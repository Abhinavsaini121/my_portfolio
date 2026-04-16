import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import { FiDownload } from 'react-icons/fi'; // Download icon ke liye
import resumeFile from '../../assets/Abhinav resume_.pdf'; 

const HeroSection = () => {
  const [stars, setStars] = useState([]);
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const newStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      size: Math.random() * 2 + 'px',
      duration: (Math.random() * 3 + 2) + 's',
      delay: Math.random() * 5 + 's'
    }));
    setStars(newStars);

    const handleScroll = () => {
      const scrollY = window.scrollY;
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
      <div className="stars-bg">
        {stars.map(star => (
          <div key={star.id} className="star-dot" 
            style={{ top: star.top, left: star.left, width: star.size, height: star.size, 
            animationDuration: star.duration, animationDelay: star.delay }}
          />
        ))}
      </div>

      <div className="hero-inner" style={{ transform: `scale(${scale})`, opacity: opacity }}>
        <div className="text-box">
          <h1 className="name-outline">ABHINAV SAINI</h1>
          <div className="animated-strike"></div>
        </div>
        <p className="role-tag">SENIOR FRONT-END ENGINEER</p>
        
        {/* RESUME BUTTON ADDED HERE */}
        <a 
          href={resumeFile} 
          download="Abhinav_Saini_Resume.pdf" 
          className="resume-btn"
          target="_blank" 
          rel="noreferrer"
        >
          DOWNLOAD RESUME <FiDownload className="download-icon" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;