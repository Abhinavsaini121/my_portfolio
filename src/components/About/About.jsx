import React from 'react';
import './About.css';

const AboutUI = () => {
  return (
    <section className="about-ui-container">
      {/* Left Side: Experience Graphic */}
      <div className="about-ui-left">
        <div className="watermark-bg">DEV DEV DEV DEV</div>
        <div className="exp-display">
          <h1 className="big-num">1+</h1>
          <div className="exp-label">
            <span>YEARS OF</span>
            <span>EXPERIENCE</span>
          </div>
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="about-ui-right">
        <span className="about-tag">ABOUT</span>
        <h2 className="about-main-heading">
          THE <span className="orange-text">'WHY'</span> <br /> 
          BEHIND WHO I AM
        </h2>
        
        <div className="about-description">
          <p>
            When I started my journey into web development, I wasn't just interested in making 
            things look good. I wanted to understand the logic that makes a digital experience 
            seamless. This curiosity turned into a passion for <strong>Frontend Engineering</strong>.
          </p>
          <p>
            With 1+ year of experience, I've learned that clean code isn't just a requirement; 
            it's a tool for evolution. My childhood shaped me into the person and the engineer 
            I am today—always asking 'why' before 'how'.
          </p>
          <p>
            Today, I specialize in building performance-driven applications with 
            <strong> React.js</strong> and <strong>Tailwind CSS</strong>, turning complex Figma 
            designs into pixel-perfect reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUI;