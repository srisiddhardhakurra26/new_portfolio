import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveAbout = () => {
  const [hoveredLetter, setHoveredLetter] = useState(null);
  
  const text = "FRONTEND DEVELOPER";
  const description = "I am a developer based in [Your City], focused on creating interactive digital experiences on the web, working with various technologies and frameworks to bring ideas to life.";

  return (
    <section className="bg-gray-900 text-gray-300 min-h-screen flex flex-col justify-center items-center p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-6xl md:text-8xl font-bold mb-8">
          {text.split('').map((letter, index) => (
            <motion.span
              key={index}
              onMouseEnter={() => setHoveredLetter(index)}
              onMouseLeave={() => setHoveredLetter(null)}
              animate={{
                y: hoveredLetter === index ? -20 : 0,
                color: hoveredLetter === index ? '#FFFF00' : '#A0AEC0',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <p className="text-xl md:text-2xl mb-8">{description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold text-lg"
        >
          Learn More
        </motion.button>
      </div>
    </section>
  );
};

export default InteractiveAbout;