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
          Software Engineer with 3+ years of experience in developing high-performance applications in finance and healthcare. Proficient in Java, Python, and SQL, with expertise in frameworks like Spring Boot and Django. Skilled in RESTful APIs, database management, and cloud services (AWS, Azure). Adept at containerization with Docker and real-time data processing using Apache Kafka.
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
            🚀 Developed robust applications using Java and Spring Boot, ensuring data integrity and scalability in healthcare and financial systems.
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
            🌐 Built and deployed the "Quotivation Station" project using the MERN tech stack, showcasing full-stack development expertise.
          </motion.li>
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default AboutSection;