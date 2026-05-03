import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './SkillsPieChart.css';

const ROLE_DETAILS = {
  'AI & Data Engineer': {
    icon: '🤖',
    skills: 'LLMs · RAG · Databricks · Snowflake · AWS Bedrock',
    color: '#FFD700',
    gradient: 'linear-gradient(135deg, #FFD700, #FFA500)'
  },
  'Backend Engineer': {
    icon: '⚙️',
    skills: 'FastAPI · Node.js · Spring Boot · Redis · Kafka',
    color: '#B8860B',
    gradient: 'linear-gradient(135deg, #B8860B, #DAA520)'
  },
  'Frontend Engineer': {
    icon: '💻',
    skills: 'React · TypeScript · D3.js · Tailwind',
    color: '#DAA520',
    gradient: 'linear-gradient(135deg, #DAA520, #F0E68C)'
  }
};

const AnimatedProgressCircles = ({ data }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="expertise-container">
      <motion.div
        className="expertise-heading-wrap"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="expertise-heading">I'm a</h2>
        <div className="expertise-heading-glow" />
      </motion.div>

      {/* Segmented composition bar */}
      <motion.div
        className="composition-bar-outer"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="composition-bar-track">
          {data.map((item, i) => {
            const details = ROLE_DETAILS[item.name] || {};
            return (
              <motion.div
                key={item.name}
                className="composition-segment"
                initial={{ width: 0 }}
                animate={{ width: animated ? `${item.value * 100}%` : 0 }}
                transition={{ duration: 1.4, delay: 0.5 + i * 0.15, ease: 'easeOut' }}
                style={{
                  background: details.gradient,
                  boxShadow: `0 0 16px ${details.color}55`
                }}
              />
            );
          })}
        </div>
        <div className="composition-bar-labels">
          {data.map((item, i) => {
            const details = ROLE_DETAILS[item.name] || {};
            return (
              <motion.div
                key={item.name}
                className="comp-label"
                style={{ width: `${item.value * 100}%`, color: details.color }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 + i * 0.1 }}
              >
                {Math.round(item.value * 100)}%
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Glassmorphic role cards */}
      <div className="role-cards-row">
        {data.map((item, i) => {
          const details = ROLE_DETAILS[item.name] || {};
          return (
            <motion.div
              key={item.name}
              className="role-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + i * 0.15 }}
              whileHover={{ y: -10, transition: { duration: 0.25 } }}
            >
              <div className="role-card-top-accent" style={{ background: details.gradient }} />
              <div className="role-card-icon-wrap">
                <span className="role-card-icon">{details.icon}</span>
              </div>
              <div className="role-card-pct" style={{ color: details.color }}>
                {Math.round(item.value * 100)}%
              </div>
              <h3 className="role-card-title" style={{ color: details.color }}>
                {item.name}
              </h3>
              <p className="role-card-skills">{details.skills}</p>
              <div className="role-progress-track">
                <motion.div
                  className="role-progress-fill"
                  initial={{ width: 0 }}
                  animate={{ width: animated ? `${item.value * 100}%` : 0 }}
                  transition={{ duration: 1.5, delay: 1.0 + i * 0.2, ease: 'easeOut' }}
                  style={{
                    background: details.gradient,
                    boxShadow: `0 0 10px ${details.color}80`
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedProgressCircles;
