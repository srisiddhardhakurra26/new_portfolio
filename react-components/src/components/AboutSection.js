import React, { useEffect, useRef } from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="about-section section">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          Software Engineer with 3+ years of experience in developing high-performance applications in finance and healthcare. Proficient in Java, Python, and SQL, with expertise in frameworks like Spring Boot and Django. Skilled in RESTful APIs, database management, and cloud services (AWS, Azure). Adept at containerization with Docker and real-time data processing using Apache Kafka. Passionate about delivering user-friendly solutions and driving projects from concept to deployment.
        </p>
        <h3 className="accomplishments-title">Accomplishments</h3>
        <ul className="accomplishments-list">
          <li>🚀 Developed robust applications using Java and Spring Boot, ensuring data integrity and scalability in healthcare and financial systems.</li>
          <li>💻 Created responsive and dynamic front-end interfaces with React.js, enhancing user experience in financial and healthcare sectors.</li>
          <li>🛠️ Implemented data streaming solutions using Apache Kafka for real-time decision-making in healthcare systems.</li>
          <li>☁️ Deployed and managed scalable applications on Azure, leveraging cloud services for improved performance and reliability.</li>
          <li>🐳 Gained proficiency in Docker and Git, optimizing software deployment and version control processes.</li>
          <li>🔄 Collaborated within Agile frameworks, ensuring timely delivery and continuous improvement of software solutions.</li>
          <li>🌐 Built and deployed the "Quotivation Station" project using the MERN tech stack, showcasing full-stack development expertise.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutSection;