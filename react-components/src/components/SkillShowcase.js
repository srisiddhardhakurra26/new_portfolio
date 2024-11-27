import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Java', icon: 'fab fa-java', level: 90 },
  { name: 'Spring', icon: 'fas fa-leaf', level: 85 },
  { name: 'React', icon: 'fab fa-react', level: 80 },
  { name: 'MongoDB', icon: 'fas fa-database', level: 75 },
  { name: 'AWS', icon: 'fab fa-aws', level: 70 },
  { name: 'Git', icon: 'fab fa-git-alt', level: 85 },
  { name: 'Docker', icon: 'fab fa-docker', level: 80 },
];

const SkillShowcase = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <div className="skill-showcase">
      <h2 className="section-title">My Skills</h2>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-item"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveSkill(skill)}
          >
            <i className={`${skill.icon} skill-icon`}></i>
            <h3 className="skill-title">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
      {activeSkill && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="skill-details"
        >
          <h3 className="skill-title">{activeSkill.name}</h3>
          <div className="skill-bar">
            <motion.div
              className="skill-progress"
              initial={{ width: 0 }}
              animate={{ width: `${activeSkill.level}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p>Proficiency: {activeSkill.level}%</p>
        </motion.div>
      )}
    </div>
  );
};

export default SkillShowcase;