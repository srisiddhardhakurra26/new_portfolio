import React from 'react';
import { motion } from 'framer-motion';
import YellowPath from './YellowPath';
import './AnimatedIntro.css'; // Make sure this file contains the updated CSS

const AnimatedIntro = () => {
  const nameArray = "Sri Siddhardha Kurra".split("");
  const roleArray = "Software Engineer".split("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="intro-container"
    >
      <h1 className="animated-name">
        {nameArray.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.5,
                delay: index * 0.1,
                y: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  y: [-2, 0, 2]
                }
              }
            }}
            whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.2 } }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </h1>

      <h3 className="animated-role">
        {roleArray.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.5,
                delay: nameArray.length * 0.1 + index * 0.05
              }
            }}
          >
            {letter}
          </motion.span>
        ))}
      </h3>

      <motion.p
        className="intro-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: nameArray.length * 0.1 + roleArray.length * 0.05 + 0.5, duration: 0.8 }}
      >
        Passionate about delivering user-friendly solutions and driving projects from concept to deployment.
      </motion.p>
      
      <YellowPath bottom="5%" />
    </motion.div>
  );
};

export default AnimatedIntro;