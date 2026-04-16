import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsCards = () => {
  const projects = [
    {
      id: "01",
      title: "VLM ACADEMY",
      type: "LMS Platform",
      desc: "Designed student dashboard in Figma and built interactive modules with React.",
      stack: ["React", "Tailwind", "Figma"],
      link: "#",
      github: "https://github.com/Abhinavsaini121"
    },
    {
      id: "02",
      title: "INDI TOUR",
      type: "Travel Portal",
      desc: "Converted complex wireframes into adaptive web portal with optimized assets.",
      stack: ["React", "API", "State Mgmt"],
      link: "#",
      github: "https://github.com/Abhinavsaini121"
    },
    {
      id: "03",
      title: "WINGMANN",
      type: "Dating App",
      desc: "Real-time state updates and profile management for a seamless dating interface.",
      stack: ["React", "CSS3", "Logic"],
      link: "#",
      github: "https://github.com/Abhinavsaini121"
    },
    {
      id: "04",
      title: "HARSH SETH",
      type: "Health Admin",
      desc: "Scalable medical records dashboard with RESTful API visualization.",
      stack: ["React", "REST API", "Charts"],
      link: "#",
      github: "https://github.com/Abhinavsaini121"
    }
  ];

  return (
    <section className="projects-grid-section">
      <div className="section-header">
        <h2 className="section-title-clean">
          <span className="orange-text">02.</span> FEATURED WORK
        </h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card-item" key={project.id}>
            <div className="card-top">
              <span className="card-id">{project.id}</span>
              <div className="card-links">
                <a href={project.github} target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href={project.link}><FaExternalLinkAlt /></a>
              </div>
            </div>
            
            <div className="card-content">
              <p className="card-type">{project.type}</p>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-desc">{project.desc}</p>
            </div>

            <div className="card-footer">
              <div className="card-stack">
                {project.stack.map((tech, i) => (
                  <span key={i} className="stack-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            {/* Hover Glow Effect */}
            <div className="card-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsCards;