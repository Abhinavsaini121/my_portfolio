import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = () => {

  return (
    <div className="splash-container">
      {/* Name Display */}
      <div className="name-wrapper">
        <h1 className="splash-name">WELLCOME</h1>
        <p className="splash-loader-text">INITIALIZING PORTFOLIO...</p>
      </div>

      {/* Sliding Shutter Bars */}
      <div className="shutter bar-1"></div>
      <div className="shutter bar-2"></div>
      <div className="shutter bar-3"></div>
      <div className="shutter bar-4"></div>
    </div>
  );
};

export default SplashScreen;