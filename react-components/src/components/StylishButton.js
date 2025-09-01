import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './StylishButton.css';

const PremiumAnimatedButton = ({ label, href, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const buttonVariants = {
    initial: { 
      scale: 1,
      rotateX: 0,
      boxShadow: '0 4px 20px rgba(255, 215, 0, 0.3)'
    },
    hover: { 
      scale: 1.05,
      rotateX: 5,
      boxShadow: '0 20px 40px rgba(255, 215, 0, 0.6)',
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: { 
      scale: 0.98,
      rotateX: -2,
      transition: { duration: 0.1 }
    }
  };

  const gradientVariants = {
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: {
        duration: 3,
        ease: 'linear',
        repeat: Infinity
      }
    }
  };

  const sparkleVariants = {
    animate: {
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      style={{ perspective: '1000px' }}
    >
      <motion.a
        href={href}
        download
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{
          display: 'inline-block',
          position: 'relative',
          padding: '16px 32px',
          borderRadius: '12px',
          border: 'none',
          textDecoration: 'none',
          color: '#1a1a1a',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 700,
          fontSize: '16px',
          letterSpacing: '0.5px',
          cursor: 'pointer',
          overflow: 'hidden',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Animated gradient background */}
        <motion.div
          variants={gradientVariants}
          animate="animate"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, #B8860B, #FFD700, #FFFF00, #FFD700, #B8860B)',
            backgroundSize: '300% 300%',
            borderRadius: '12px'
          }}
        />

        {/* Hover overlay */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8
          }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,255,0,0.3), rgba(255,255,255,0.2))',
            borderRadius: '12px'
          }}
        />

        {/* Sparkles */}
        {isHovered && (
          <motion.div
            variants={sparkleVariants}
            animate="animate"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: 'none'
            }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  width: '4px',
                  height: '4px',
                  background: '#fff',
                  borderRadius: '50%',
                  left: `${20 + (i * 10)}%`,
                  top: `${20 + (i % 3) * 20}%`
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        )}

        {/* Shine effect */}
        <motion.div
          animate={isHovered ? {
            x: ['-100%', '200%'],
            transition: { duration: 0.6, ease: "easeInOut" }
          } : {}}
          style={{
            position: 'absolute',
            top: 0,
            left: '-25%',
            width: '50%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
            transform: 'skewX(-20deg)',
            pointerEvents: 'none'
          }}
        />

        {/* Button text */}
        <motion.span
          animate={{
            textShadow: isHovered 
              ? '0 0 20px rgba(255,215,0,0.8)' 
              : '0 2px 4px rgba(0,0,0,0.3)'
          }}
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'block'
          }}
        >
          {label}
        </motion.span>

        {/* Bottom glow */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.5
          }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            bottom: '-10px',
            left: '20%',
            right: '20%',
            height: '10px',
            background: 'radial-gradient(ellipse, rgba(255,215,0,0.8), transparent)',
            filter: 'blur(8px)',
            borderRadius: '50%'
          }}
        />
      </motion.a>
    </motion.div>
  );
};

const DownloadButtons = () => {
  return (
    <div 
      className="premium-button-container"
      style={{
        display: 'flex',
        gap: '30px',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}
    >
      <PremiumAnimatedButton 
        label="Download PDF" 
        href="/Sri Siddhardha Kurra_Software Development_Engineer.pdf" 
        delay={0.1}
      />
      <PremiumAnimatedButton 
        label="Download Word" 
        href="/Sri Siddhardha Kurra_Software Development_Engineer.docx" 
        delay={0.2}
      />
    </div>
  );
};

export default DownloadButtons;