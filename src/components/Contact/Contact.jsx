import React from 'react';
import './Contact.css';
import { FiSend, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Side: Info */}
        <div className="contact-info">
          <span className="section-tag"><span className="orange-text">03.</span> CONTACT</span>
          <h2 className="contact-heading">CONVERSATION <br /> COMES FIRST</h2>
          
          <div className="contact-details">
            <div className="detail-item">
              <FiMail className="detail-icon" />
              <div>
                <p className="detail-label">Email</p>
                <a href="mailto:abhinavsaini622@gmail.com" className="detail-link">abhinavsaini622@gmail.com</a>
              </div>
            </div>

            <div className="detail-item">
              <FiPhone className="detail-icon" />
              <div>
                <p className="detail-label">Phone</p>
                <a href="tel:+919084662858" className="detail-link">+91 9084662858</a>
              </div>
            </div>

            <div className="detail-item">
              <FiMapPin className="detail-icon" />
              <div>
                <p className="detail-label">Location</p>
                <span className="detail-text">Dehradun, Uttarakhand, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="form-group">
              <label>NAME</label>
              <input type="text" placeholder="What's your name?" />
            </div>

            <div className="form-group">
              <label>EMAIL</label>
              <input type="email" placeholder="Where can I reach you?" />
            </div>

            <div className="form-group">
              <label>MESSAGE</label>
              <textarea rows="5" placeholder="Anything you'd like to discuss?"></textarea>
            </div>

            <button type="submit" className="submit-btn">
              SEND MESSAGE <FiSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;