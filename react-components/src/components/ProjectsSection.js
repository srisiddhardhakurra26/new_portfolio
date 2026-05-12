import React, { useRef, useEffect, useState } from 'react';
import './ProjectSection.css';

const projects = [
  {
    title: "AI Sales Automation & Conversion Funnel Pipeline",
    tech: "Python, FastAPI, LLM, Streamlit, Google Sheets",
    description: "Built an inbound LLM voice agent to automate sales and multi-round rate negotiations. Engineered a FastAPI pipeline to extract and stream sentiment data to Google Sheets.",
    caseStudy: {
      problem: "Sales reps were spending 70% of their time on repetitive inbound qualification calls and manual rate negotiations, leaving little bandwidth for high-value deal closing.",
      solution: "Built an LLM-powered inbound voice agent using FastAPI that handles multi-round negotiations autonomously. Added a real-time sentiment extraction pipeline streaming directly into Google Sheets. Developed a Streamlit dashboard for sales ops to monitor funnel performance.",
      impact: "Automated 80% of inbound call volume, freeing the sales team for strategic accounts. Real-time sentiment data improved response strategies and tracking visibility across the entire funnel."
    }
  },
  {
    title: "Online Quiz System",
    tech: "Spring Boot, React, MongoDB Atlas, JWT, Material-UI",
    description: "Architected a full-stack quiz platform enabling user-driven quiz creation and participation, with secure JWT authentication and sub-100ms retrieval times.",
    link: "https://dashing-mousse-6d171a.netlify.app/",
    caseStudy: {
      problem: "Existing quiz tools lacked the ability for users to create and share their own quizzes while maintaining secure, personalized progress tracking.",
      solution: "Architected a full-stack platform with Spring Boot and React. Implemented JWT-based authentication and MongoDB Atlas with compound indexing to achieve sub-100ms quiz retrieval. Added real-time scoring and comprehensive error handling.",
      impact: "Delivered a scalable, production-ready quiz platform with secure multi-user support, fast data access, and real-time progress tracking out of the box."
    }
  },
  {
    title: "Quotivation Station",
    tech: "React, JavaScript, Express, MongoDB Atlas, Node.js, Docker",
    description: "A user-friendly web app with 1000+ users, featuring innovative image generation and quote sharing. Containerized with Docker Compose.",
    link: "https://www.siddhardhakurra.com",
    caseStudy: {
      problem: "Social quote-sharing apps suffered from slow feed loads at scale, discouraging user engagement and limiting growth.",
      solution: "Built a full-stack app with React and Node.js/Express. Implemented compound MongoDB indexing and LRU caching for the feed layer. Containerized the entire stack with Docker Compose for reliable scaling.",
      impact: "Achieved a 25% reduction in feed retrieval latency. Grew to 1000+ active users with a consistently smooth experience as usage increased."
    }
  },
  {
    title: "TimeVault App",
    tech: "Django, Python3, web3, Truffle, Ethereum Blockchain, SQLite3",
    description: "A blockchain-based time capsule app with Truffle smart contracts on Ethereum, ensuring tamper-proof security. Boosted user engagement by 25%.",
    caseStudy: {
      problem: "Digital memories are easily altered or deleted. There was no trustworthy way to lock content to be revealed only at a future date without relying on a central authority.",
      solution: "Built smart contracts with Truffle on the Ethereum blockchain to create tamper-proof time capsules. Developed an intuitive Django and Bootstrap UI so non-technical users could interact with on-chain storage easily.",
      impact: "Delivered provably immutable time capsule functionality. The accessible UI drove a 25% uplift in user engagement compared to a command-line prototype."
    }
  },
  {
    title: "Inventory System",
    tech: "Java, J2EE, JPA, JAX-RS, CDI, JSP, JMS, WebSockets, Threads",
    description: "Introduced lazy loading, Trie-based indexing for faster search, real-time chat via WebSockets, and thread pooling to cut update times by 40%.",
    caseStudy: {
      problem: "A large-scale inventory system suffered from slow product searches, long update cycles, and no real-time communication channel for issue resolution between warehouse staff.",
      solution: "Added lazy loading and Trie-based indexing for the product catalog. Integrated real-time chat via WebSockets for instant staff communication. Replaced sequential update jobs with a thread pool executor.",
      impact: "Product search improved by 25%, real-time chat cut issue resolution time by 15%, and thread pooling slashed bulk update duration by 40%."
    }
  },
  {
    title: "Real-Time Collaborative Text Editor",
    tech: "C++, WebSocket, CRDT Algorithm, STL, Qt",
    description: "Built a real-time collaborative text editor using C++, Qt, and WebSocket protocol with CRDT algorithm for conflict-free concurrent editing.",
    caseStudy: {
      problem: "Building a collaborative editor where multiple users can edit simultaneously without conflicts or data loss is a hard distributed systems problem, especially without relying on a central merge server.",
      solution: "Implemented the CRDT (Conflict-free Replicated Data Type) algorithm in C++ to allow concurrent edits that merge deterministically across clients. Used Qt for the UI and WebSocket for low-latency real-time sync. Optimized with STL containers and modern C++ features.",
      impact: "Achieved conflict-free concurrent editing with no central reconciliation server, demonstrating production-grade distributed systems fundamentals in a fully native C++ application."
    }
  }
];

const CaseStudyModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-tech">{project.tech}</p>
        <div className="modal-sections">
          <div className="modal-section">
            <h4 className="modal-section-label problem-label">Problem</h4>
            <p>{project.caseStudy.problem}</p>
          </div>
          <div className="modal-section">
            <h4 className="modal-section-label solution-label">Solution</h4>
            <p>{project.caseStudy.solution}</p>
          </div>
          <div className="modal-section">
            <h4 className="modal-section-label impact-label">Impact</h4>
            <p>{project.caseStudy.impact}</p>
          </div>
        </div>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link modal-link">
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onSelect }) => (
  <div className="project-card" onClick={() => onSelect(project)}>
    <div className="project-card-content">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-tech">{project.tech}</p>
      <p className="project-description">{project.description}</p>
      <button className="case-study-btn">View Case Study →</button>
    </div>
  </div>
);

const ProjectsSection = () => {
  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: direction === 'left' ? -400 : 400, behavior: 'smooth' });
    }
  };

  const checkScroll = () => {
    const container = containerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 20);
      setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      checkScroll();
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
            <button className="scroll-button scroll-left" onClick={() => scroll('left')} aria-label="Scroll left">←</button>
          )}
          <div className="projects-container" ref={containerRef}>
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} onSelect={setSelectedProject} />
            ))}
          </div>
          {showRightArrow && (
            <button className="scroll-button scroll-right" onClick={() => scroll('right')} aria-label="Scroll right">→</button>
          )}
        </div>
      </div>
      {selectedProject && (
        <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default ProjectsSection;
