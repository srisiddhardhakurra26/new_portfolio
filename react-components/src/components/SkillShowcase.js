import React from 'react';
import { motion } from 'framer-motion';
import './SkillShowcase.css';

const skills = [
  { name: 'Python', icon: 'fab fa-python', proficiency: 95, years: 5 },
  { name: 'JavaScript', icon: 'fab fa-js-square', proficiency: 85, years: 4 },
  { name: 'TypeScript', icon: 'fab fa-js-square', proficiency: 75, years: 2 },
  { name: 'RAG Pipelines', icon: 'fas fa-brain', proficiency: 90, years: 2 },
  { name: 'AWS Bedrock', icon: 'fab fa-aws', proficiency: 85, years: 2 },
  { name: 'LangGraph', icon: 'fas fa-project-diagram', proficiency: 80, years: 1 },
  { name: 'PySpark / Databricks', icon: 'fas fa-bolt', proficiency: 90, years: 3 },
  { name: 'Snowflake', icon: 'fas fa-snowflake', proficiency: 85, years: 2 },
  { name: 'Apache Kafka', icon: 'fas fa-stream', proficiency: 75, years: 2 },
  { name: 'Airflow', icon: 'fas fa-wind', proficiency: 75, years: 2 },
  { name: 'React', icon: 'fab fa-react', proficiency: 82, years: 3 },
  { name: 'FastAPI', icon: 'fas fa-rocket', proficiency: 80, years: 2 },
  { name: 'PostgreSQL', icon: 'fas fa-database', proficiency: 80, years: 3 },
  { name: 'Terraform', icon: 'fas fa-cubes', proficiency: 75, years: 2 },
  { name: 'Docker / Kubernetes', icon: 'fab fa-docker', proficiency: 80, years: 2 },
  { name: 'AWS', icon: 'fab fa-aws', proficiency: 88, years: 3 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const SkillItem = ({ skill, index }) => (
  <motion.div
    className="skill-item"
    variants={itemVariants}
    whileHover={{ scale: 1.04, y: -4, transition: { duration: 0.2 } }}
    whileTap={{ scale: 0.96 }}
  >
    <i className={`${skill.icon} skill-icon`}></i>
    <h3 className="skill-title">{skill.name}</h3>
    <div className="skill-bar-track" title={`${skill.years} yr${skill.years !== 1 ? 's' : ''} experience`}>
      <motion.div
        className="skill-bar-fill"
        initial={{ width: '0%' }}
        whileInView={{ width: `${skill.proficiency}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.04, ease: 'easeOut' }}
      />
    </div>
    <div className="skill-meta">
      <span className="skill-pct">{skill.proficiency}%</span>
      <span className="skill-years">{skill.years} yr{skill.years !== 1 ? 's' : ''}</span>
    </div>
  </motion.div>
);

const SkillShowcase = () => (
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
        <SkillItem key={skill.name} skill={skill} index={index} />
      ))}
    </motion.div>
  </div>
);

export default SkillShowcase;
