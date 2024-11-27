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
      <motion.path
        d="M0,5 Q25,0 50,5 T100,5"
        fill="none"
        stroke="#e9e61c"
        strokeWidth="0.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        key={Math.random()} // This forces the animation to restart
      />
    </svg>
  );
};

export default YellowPath;