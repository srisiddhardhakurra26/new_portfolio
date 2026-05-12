import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import YellowPath from './YellowPath';
import './AnimatedIntro.css';

const CYCLING_ROLES = [
  "Full Stack AI & Data Engineer",
  "GenAI Systems Architect",
  "Databricks & Cloud Expert",
  "Data Pipeline Engineer",
];

const AnimatedIntro = ({ chatTrigger }) => {
  const nameArray = "Sri Siddhardha Kurra".split("");
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % CYCLING_ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="intro-container"
    >
      <h1 className="animated-name">
        {nameArray.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.2 } }}
          >
            {letter === " " ? " " : letter}
          </motion.span>
        ))}
      </h1>

      {/* Cycling role with AnimatePresence */}
      <div className="role-cycling-wrapper">
        <AnimatePresence mode="wait">
          <motion.h2
            key={roleIndex}
            className="animated-role"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 0.92, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
          >
            {CYCLING_ROLES[roleIndex]}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* Stats pills */}
      <motion.div
        className="stats-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <div className="stat-pill">~5 yrs experience</div>
        <div className="stat-divider">·</div>
        <div className="stat-pill">20+ AI apps deployed</div>
        <div className="stat-divider">·</div>
        <div className="stat-pill">8 companies</div>
      </motion.div>

      {/* Social links */}
      <motion.div
        className="social-links-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.1, duration: 0.6 }}
      >
        <a
          href="https://github.com/srisiddhardhakurra26"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
          aria-label="GitHub"
        >
          <i className="fab fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/sid-k-339962319/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in" />
        </a>
        <a
          href="mailto:srisiddhardhakurra@gmail.com"
          className="social-btn"
          aria-label="Email"
        >
          <i className="fas fa-envelope" />
        </a>
      </motion.div>

      {chatTrigger && (
        <div className="chat-trigger-region">
          {chatTrigger}
        </div>
      )}

      {/* Animated scroll indicator */}
      <motion.div
        className="scroll-down-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <i className="fas fa-chevron-down" />
        </motion.div>
      </motion.div>

      <YellowPath bottom="5%" />
    </motion.div>
  );
};

export default AnimatedIntro;
