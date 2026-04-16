import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import './Header.css';

const Header = () => {
  return (
    <nav className="fixed-header">
      <div className="logo-text">
        PORTFOLIO
      </div>
      <div className="social-links">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="icon-item"><FaGithub /></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="icon-item"><FaLinkedinIn /></a>
        <a href="mailto:hello@example.com" className="icon-item"><HiOutlineMail /></a>
      </div>
    </nav>
  );
};

export default Header;