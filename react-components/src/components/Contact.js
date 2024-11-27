import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaBlog } from 'react-icons/fa';
import './Contact.css';
import YellowPath from './YellowPath';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  const contactItems = [
    { icon: FaMapMarkerAlt, text: 'New York City, NY - Remote', link: null },
    { icon: FaEnvelope, text: 'srisiddhardhak@gmail.com', link: 'mailto:srisiddhardhak@gmail.com' },
    { icon: FaPhoneAlt, text: '(862) 800-6461', link: null },
    { icon: FaLinkedin, text: 'LinkedIn', link: 'https://www.linkedin.com/in/sid-k-339962319/' },
    { icon: FaGithub, text: 'GitHub', link: 'https://github.com/srisiddhardhakurra26' },
    { icon: FaBlog, text: 'Blog', link: 'https://sid-kurra.hashnode.dev/newsletter' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = contactRef.current; // Store ref in a variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <motion.div 
      ref={contactRef}
      className="contact-info"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        className="contact-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Contact Me
      </motion.h2>
      <div className="contact-list">
        {contactItems.map((item, index) => (
          <motion.div 
            key={index}
            className="contact-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <item.icon className="icon" />
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
            ) : (
              <span>{item.text}</span>
            )}
          </motion.div>
        ))}
      </div>
      {isVisible && <YellowPath bottom="5%" />}
    </motion.div>
  );
};

export default Contact;