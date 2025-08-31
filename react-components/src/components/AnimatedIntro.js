import React from 'react';
import { motion } from 'framer-motion';
import YellowPath from './YellowPath';
import './AnimatedIntro.css'; // Make sure this file contains the updated CSS

const AnimatedIntro = () => {
  const nameArray = "Sri Siddhardha Kurra".split("");
  const roleArray = "Software Engineer".split("");

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
            whileHover={{ 
              scale: 1.2, 
              rotate: 10, 
              transition: { duration: 0.2 },
              color: "#FF6B6B"
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </h1>

      <motion.h2 
        className="animated-role"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          delay: nameArray.length * 0.1 + 0.5
        }}
      >
        {roleArray.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.5,
                delay: nameArray.length * 0.1 + 0.5 + index * 0.05
              }
            }}
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h2>
      
      <YellowPath bottom="5%" />
    </motion.div>
  );
};

export default AnimatedIntro;