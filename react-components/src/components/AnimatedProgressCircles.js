import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './SkillsPieChart.css';

const CircularProgress = ({ percentage, label, delay = 0, color = '#FFD700' }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const radius = 80;
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (currentPercentage / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPercentage(percentage);
    }, delay);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="circular-progress-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: '1rem',
        minWidth: '200px',
        width: '220px'
      }}
    >
      <div style={{ position: 'relative', width: '180px', height: '180px' }}>
        <svg
          height={radius * 2}
          width={radius * 2}
          style={{ transform: 'rotate(-90deg)', position: 'absolute' }}
        >
          {/* Background circle */}
          <circle
            stroke="rgba(255, 215, 0, 0.1)"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          {/* Progress circle */}
          <circle
            stroke={color}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            style={{
              strokeDashoffset,
              transition: 'stroke-dashoffset 2s ease-in-out',
              filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.4))'
            }}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        
        {/* Percentage text in center */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: (delay + 500) / 1000 }}
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #B8860B, #FFD700, #FFFF00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.3))'
            }}
          >
            {Math.round(currentPercentage)}%
          </motion.div>
        </div>
      </div>
      
      {/* Label */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: (delay + 1000) / 1000 }}
        className="progress-label"
      >
        {label}
      </motion.h3>
    </motion.div>
  );
};

const AnimatedProgressCircles = ({ data }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      padding: '2rem'
    }}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '3rem',
          background: 'linear-gradient(45deg, #B8860B, #FFD700, #FFFF00, #FFF8DC, #FFD700, #DAA520)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 30px rgba(255, 215, 0, 0.4)',
          textAlign: 'center'
        }}
      >
        I'm a
      </motion.h2>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '3rem',
        maxWidth: '700px',
        width: '100%'
      }}>
        {data.map((item, index) => (
          <CircularProgress
            key={item.name}
            percentage={item.value * 100}
            label={item.name}
            delay={index * 500}
            color={index === 0 ? '#FFD700' : '#B8860B'}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedProgressCircles;