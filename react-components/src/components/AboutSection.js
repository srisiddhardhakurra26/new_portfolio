import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div ref={sectionRef} className="about-section section">
      <motion.div 
        className="about-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 
          className="section-title"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        
        <motion.p 
          className="about-text"
          variants={itemVariants}
        >
          Software Engineer with 3+ years of experience in designing, developing, and deploying high-performance applications in AI/ML, enterprise AI, finance, and healthcare sectors. Proficient in Python, JavaScript, TypeScript, Java, and SQL, with expertise in frameworks like Spring Boot, FastAPI, React, and LangGraph. Skilled in designing RAG pipelines, Agentic AI systems, database management (PostgreSQL, MongoDB, Oracle), and cloud services (AWS, Azure). Adept at containerization with Docker, real-time data processing using Apache Kafka, and implementing AI workflows for intelligent query processing. Passionate about collaborating with cross-functional teams to deliver user-friendly solutions, optimize system performance, and drive AI/ML projects from concept to deployment.
        </motion.p>

        <motion.h3 
          className="accomplishments-title"
          variants={itemVariants}
        >
          Key Accomplishments
        </motion.h3>

        <motion.ul 
          className="accomplishments-list"
          variants={containerVariants}
        >
          <motion.li variants={itemVariants}>
            🚀 Contributed to the development of an Agentic GenAI system at C3.ai using RAG pipelines, enhancing response accuracy for enterprise applications.
          </motion.li>
          <motion.li variants={itemVariants}>
            💻 Created responsive and dynamic front-end interfaces with React.js, enhancing user experience in financial and healthcare sectors.
          </motion.li>
          <motion.li variants={itemVariants}>
            🛠️ Implemented data streaming solutions using Apache Kafka for real-time decision-making in healthcare systems.
          </motion.li>
          <motion.li variants={itemVariants}>
            ☁️ Deployed and managed scalable applications on Azure, leveraging cloud services for improved performance and reliability.
          </motion.li>
          <motion.li variants={itemVariants}>
            🐳 Gained proficiency in Docker and Git, optimizing software deployment and version control processes.
          </motion.li>
          <motion.li variants={itemVariants}>
            🔄 Collaborated within Agile frameworks, ensuring timely delivery and continuous improvement of software solutions.
          </motion.li>
          <motion.li variants={itemVariants}>
            🧪 Conducted comprehensive QA testing and automated unit tests at C3.ai, identifying issues and enabling on-time releases.
          </motion.li>
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default AboutSection;