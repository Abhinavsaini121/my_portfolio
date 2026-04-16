import React from 'react';
import './Footer.css';

const Footer = () => {
  const marqueeText = "ENGINEER * DEHRADUN, INDIA * ABHINAV SAINI * FRONT-END DEVELOPER * REACT EXPERT * UI/UX ENTHUSIAST * ";

  return (
    <footer className="footer-container">
      {/* Orange CTA Section */}
      <div className="cta-section">
        <h2 className="cta-heading">
          LET'S BUILD <br /> SOMETHING GREAT
        </h2>
        <div className="cta-buttons">
          <a href="mailto:abhinavsaini622@gmail.com" className="btn-touch">
            GET IN TOUCH
          </a>
          <a href="https://github.com/Abhinavsaini121" target="_blank" rel="noreferrer" className="btn-github">
            VIEW GITHUB
          </a>
        </div>
      </div>

      {/* Bottom Moving Strip */}
      <div className="bottom-marquee-strip">
        <div className="marquee-track-footer">
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;