import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', icon: 'fab fa-python' },
  { name: 'JavaScript', icon: 'fab fa-js-square' },
  { name: 'TypeScript', icon: 'fab fa-js-square' },
  { name: 'RAG Pipelines', icon: 'fas fa-brain' },
  { name: 'GenAI', icon: 'fas fa-robot' },
  { name: 'LangChain', icon: 'fas fa-link' },
  { name: 'LangGraph', icon: 'fas fa-project-diagram' },
  { name: 'React', icon: 'fab fa-react' },
  { name: 'FastAPI', icon: 'fas fa-rocket' },
  { name: 'PostgreSQL', icon: 'fas fa-database' },
  { name: 'AWS', icon: 'fab fa-aws' },
  { name: 'Docker', icon: 'fab fa-docker' },
];

const SkillShowcase = () => {
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
    <div className="skill-showcase">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>
      <motion.div 
        className="skill-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-item"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <i className={`${skill.icon} skill-icon`}></i>
            <h3 className="skill-title">{skill.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillShowcase;