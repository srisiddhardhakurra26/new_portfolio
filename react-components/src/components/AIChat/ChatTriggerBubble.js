import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './ChatTriggerBubble.css';

/**
 * ChatTriggerBubble
 * - Fixed position removed in favor of centered placement within hero
 * - Hover: grows 5x while maintaining spring feel
 * - Click: circular reveal expanding from bubble, then triggers onOpen
 * Visual: gold glow, subtle pulse, matches dark theme
 */
export default function ChatTriggerBubble({ onOpen, isOpen }) {
  const baseSize = 72; // px default footprint on desktop
  const hoverTargetSize = 300; // px, matches previous hover footprint
  const hoverScale = hoverTargetSize / baseSize;

  const bubbleRef = useRef(null);
  const overlayAnimRef = useRef({ finalScale: 1 });
  const leaveTimerRef = useRef(null);

  const [hovering, setHovering] = useState(false);
  const [expanding, setExpanding] = useState(false);
  const [overlay, setOverlay] = useState(null); // {cx, cy, size}

  useEffect(() => {
    if (isOpen) {
      setHovering(false);
    }
  }, [isOpen]);

  useEffect(() => () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
    }
  }, []);

  const clearLeaveTimer = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    if (expanding || isOpen) return;
    clearLeaveTimer();
    setHovering(true);
  };

  const handleMouseLeave = () => {
    if (expanding || isOpen) return;
    clearLeaveTimer();
    leaveTimerRef.current = window.setTimeout(() => {
      setHovering(false);
    }, 200);
  };

  const triggerOpen = () => {
    if (expanding || isOpen) return;
    setExpanding(true);

    const rect = bubbleRef.current?.getBoundingClientRect();
    const cx = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const cy = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;

    const diameter = rect?.width || baseSize;
    const diag = Math.hypot(window.innerWidth, window.innerHeight);
    const finalScale = (diag / diameter) * 1.2;

    setOverlay({ cx, cy, size: diameter });
    overlayAnimRef.current = { finalScale };

    window.setTimeout(() => {
      onOpen?.();
    }, 280);

    window.setTimeout(() => {
      setExpanding(false);
      setOverlay(null);
      setHovering(false);
    }, 700);
  };

  return (
    <>
      <motion.button
        ref={bubbleRef}
        type="button"
        className="chat-bubble-trigger"
        style={{ width: baseSize, height: baseSize }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={triggerOpen}
        aria-label="Open AI Chat"
        initial={false}
        animate={{
          scale: hovering ? hoverScale : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: hovering ? 200 : 250,
          damping: hovering ? 20 : 25,
          mass: 0.8
        }}
      >
        <svg
          className="chat-bubble-icon"
          width="28"
          height="28"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M24 8v-4" />
          <rect x="10" y="12" width="28" height="24" rx="8" />
          <path d="M16 40h16" />
          <path d="M18 36v4" />
          <path d="M30 36v4" />
          <circle cx="20" cy="24" r="2.5" fill="currentColor" stroke="none" />
          <circle cx="28" cy="24" r="2.5" fill="currentColor" stroke="none" />
          <path d="M18 30h12" />
        </svg>
      </motion.button>

      {createPortal(
        <AnimatePresence>
          {overlay && (
            <motion.div
              className="chat-reveal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="chat-reveal-circle"
                style={{ left: overlay.cx, top: overlay.cy, width: overlay.size, height: overlay.size }}
                initial={{ scale: 1 }}
                animate={{ scale: overlayAnimRef.current.finalScale }}
                exit={{ scale: overlayAnimRef.current.finalScale }}
                transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
