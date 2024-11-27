import React, { useRef, useEffect, useState } from 'react';
import './ProjectSection.css';

const projects = [
  {
    title: "Online Quiz System",
    tech: "Spring Boot, React, MongoDB Atlas, JWT, Material-UI",
    description: "Architected a full-stack quiz platform enabling user-driven quiz creation and participation, with secure JWT authentication. Implemented efficient MongoDB indexing for sub-100ms quiz retrieval times. Features real-time scoring, progress tracking, and comprehensive error handling.",
    link: "https://dashing-mousse-6d171a.netlify.app/"
  },
  {
    title: "Quotivation Station",
    tech: "React, JavaScript, Express, MongoDB Atlas, Node.js, Docker",
    description: "A user-friendly web app with 1000+ users, lauded for innovative image generation and quote sharing features. Containerized with Docker Compose for scalable architecture. Implemented compound indexing and LRU caching for improved performance.",
    link: "www.siddhardhakurra.com"
  },
  {
    title: "TimeVault App",
    tech: "Django, Python3, web3, Truffle, Ethereum Blockchain, SQLite3",
    description: "A blockchain-based time capsule app with Truffle smart contracts on Ethereum, ensuring tamper-proof security and integrity. Developed an intuitive UI with Django and Bootstrap, boosting user engagement by 25%."
  },
  {
    title: "Inventory System",
    tech: "Java, J2EE, JPA, JAX-RS, CDI, JSP, JMS, WebSockets, Threads",
    description: "Introduced lazy loading, Trie-based indexing, real-time chat via WebSockets, and thread pooling for improved performance and efficiency in inventory management."
  },
  {
    title: "Real-Time Collaborative Text Editor",
    tech: "C++, WebSocket, CRDT Algorithm, Git, STL, Qt",
    description: "Built a real-time collaborative text editor using C++, Qt, and WebSocket protocol with CRDT algorithm for conflict-free concurrent editing. Optimized performance and UI with STL containers, algorithms, modern C++ features, and Qt GUI widgets."
  }
];

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div className="project-card-content">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-tech">{project.tech}</p>
      <p className="project-description">{project.description}</p>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
        </a>
      )}
    </div>
  </div>
);

const ProjectsSection = () => {
  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const checkScroll = () => {
    const container = containerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 20);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    
    if (container) {
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      checkScroll(); // Initial check
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      }
    };
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-wrapper">
          {showLeftArrow && (
            <button 
              className="scroll-button scroll-left"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
            >
              ←
            </button>
          )}
          
          <div className="projects-container" ref={containerRef}>
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          {showRightArrow && (
            <button 
              className="scroll-button scroll-right"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              →
            </button>
          )}
        </div>
        {/* <div className="scroll-indicator">
          <span>Scroll to see more projects</span>
          <div className="scroll-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;