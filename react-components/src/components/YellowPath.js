import React from 'react';
import { motion } from 'framer-motion';

const YellowPath = ({ bottom = '5%' }) => {
  return (
    <svg
      className="yellow-path"
      viewBox="0 0 100 10"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        bottom: bottom,
        left: 0,
        width: '100%',
        height: '10%',
        zIndex: -1,
      }}
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B8860B" />
          <stop offset="25%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FFFF00" />
          <stop offset="75%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0,5 Q25,0 50,5 T100,5"
        fill="none"
        stroke="url(#goldGradient)"
        strokeWidth="0.8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        key={Math.random()}
      />
    </svg>
  );
};

export default YellowPath;