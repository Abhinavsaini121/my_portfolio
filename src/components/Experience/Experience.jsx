import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Web Developer",
      company: "Pearl Organisation",
      duration: "Feb 2025 – Present",
      location: "Dehradun, India",
      points: [
        "Developed high-performance web applications using React.js and Tailwind CSS.",
        "Engineered a library of reusable UI components, reducing dev time by 40%.",
        "Optimized performance using Lazy Loading & Code Splitting (25% speed boost).",
        "Translated Figma mockups into pixel-perfect, responsive code."
      ]
    },
    {
      role: "Web Development Intern",
      company: "IT Doubt",
      duration: "Dec 2024 – Jan 2025",
      location: "Remote",
      points: [
        "Constructed intuitive user interfaces utilizing HTML5, CSS3, and JavaScript.",
        "Produced high-fidelity UI prototypes in Figma (30% faster handoff).",
        "Resolved critical frontend bottlenecks for core product modules."
      ]
    }
  ];

  return (
    <section className="exp-section">
      <h2 className="section-title"><span className="orange-text">01.</span> WORK EXPERIENCE</h2>
      <div className="exp-list">
        {experiences.map((exp, index) => (
          <div className="exp-item" key={index}>
            <div className="exp-header">
              <div>
                <h3 className="exp-role">{exp.role}</h3>
                <p className="exp-company">{exp.company}</p>
              </div>
              <div className="exp-meta">
                <span>{exp.duration}</span>
                <span>{exp.location}</span>
              </div>
            </div>
            <ul className="exp-points">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;