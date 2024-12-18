import React, { useEffect, useState } from 'react';
import './App.css';
import AboutSection from './components/AboutSection';
import SkillsPieChart from './components/SkillsPieChart';
import AnimatedIntro from './components/AnimatedIntro';
import SkillShowcase from './components/SkillShowcase';
// import ParticleBackground from './components/ParticleBackground';
import Resume from './components/Resume.js';
import Contact from './components/Contact.js';
import ProjectsSection from './components/ProjectsSection.js';
import DownloadButtons from './components/StylishButton.js';

function App() {
  const [resumeContent, setResumeContent] = useState('');

  useEffect(() => {
    // Fetch the HTML resume content
    fetch('/resume.html')
      .then(response => response.text())
      .then(html => setResumeContent(html))
      .catch(error => console.error('Error loading resume:', error));

    function handleScroll() {
      const sections = document.querySelectorAll('.section');
      const scrollPosition = window.scrollY;

      sections.forEach((section, index) => {
        if (scrollPosition >= section.offsetTop - window.innerHeight / 2) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });

      const navbar = document.querySelector('.navbar');
      if (scrollPosition > 50) {
        navbar.style.backgroundColor = 'rgba(51, 51, 51, 1)';
      } else {
        navbar.style.backgroundColor = 'rgba(51, 51, 51, 0.8)';
      }
      
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Activate the first visible section on page load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="/"><span className="highlight">Sid</span> Kurra</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              <li className="nav-item"><a className="nav-link" href="https://sid-kurra.hashnode.dev/newsletter">Blog</a></li>

            </ul>
          </div>
        </div>
      </nav>

      <section id="home" className="section">
        {/* <ParticleBackground /> */}
        <div className="container">
          <AnimatedIntro />
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <AboutSection />
        </div>
      </section>

      <section id="skills-distribution" className="section">
        <div className="container">
          <SkillsPieChart />
        </div>
      </section>

      <section id="skills-distribution" className="section">
        <div className="container">
          <ProjectsSection/>
        </div>
      </section>

      {/* <section id="projects" className="section">
        <div className="container">
          <h2>My Projects</h2>
          <ul className="list-unstyled">
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
          </ul>
        </div>
      </section> */}

      {/* <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <div className="row">
          <div className="col-md-4">
              <div className="skill-item text-center">
                <i className="fab fa-java skill-icon"></i>
                <h3 className="skill-title">Java</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-item text-center">
                <img src="images/spring-logo.png" alt="Spring logo" className="skill-icon" style={{width: '48px', height: '48px'}} />
                <h3 className="skill-title">Spring</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-item text-center">
                <i className="fab fa-react skill-icon"></i>
                <h3 className="skill-title">React</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-item text-center">
                <i className="fas fa-database skill-icon"></i>
                <h3 className="skill-title">MongoDB</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-item text-center">
                <i className="fab fa-aws skill-icon"></i>
                <h3 className="skill-title">AWS</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-item text-center">
                <i className="fab fa-git-alt skill-icon"></i>
                <h3 className="skill-title">Git</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-item text-center">
                <i className="fab fa-docker skill-icon"></i>
                <h3 className="skill-title">Docker</h3>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="skills" className="section mb-5">
        <div className="container">
          <SkillShowcase/>
        </div>
      </section>

      <section id="resume" className="section mt-5">
        <div className="container d-flex flex-column align-items-center">
          <h2>Resume</h2>
          <div className="mt-3">
            <DownloadButtons />
          </div>
          {/* <div className="mt-3">
            <a href="/Sri Siddhardha Kurra_Software Development Engineer.pdf" className="btn btn-primary me-2" download>Download PDF</a>
            <a href="/Sri Siddhardha Kurra_Software Development Engineer (1).docx" className="btn btn-secondary" download>Download Word</a>
          </div> */}
          <div className="resume-container">
            <Resume content={resumeContent} />
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <Contact />
        </div>
      </section>
    </div>
  );
}

export default App;