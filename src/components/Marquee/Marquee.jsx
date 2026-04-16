import React from 'react';
import './Marquee.css';

const Marquee = () => {
  // Aap yahan apne skills ya tools likh sakte hain
  const items = [
    "AI TOOLS", "REACT JS", "UI/UX DESIGN", "OPTIMIZATION", 
    "FRONT-END", "ANIMATIONS", "WEB DEVELOPMENT"
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {/* Do baar map isliye taaki loop seamless (pata na chale kahan khatam hua) lage */}
        {[...Array(2)].map((_, i) => (
          <div className="marquee-content" key={i}>
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <span className="marquee-text">{item}</span>
                <span className="marquee-star">*</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;