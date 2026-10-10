import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check touch screen capability
    const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (touch) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest('[data-cursor], a, button, input, select, textarea');
      if (interactiveEl) {
        setIsHovered(true);
        const attrText = interactiveEl.getAttribute('data-cursor');
        setCursorText(attrText || '');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer follow ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - (isHovered ? (cursorText ? 40 : 28) : 16),
          y: mousePosition.y - (isHovered ? (cursorText ? 40 : 28) : 16),
          width: isHovered ? (cursorText ? 80 : 56) : 32,
          height: isHovered ? (cursorText ? 80 : 56) : 32,
          backgroundColor: isHovered ? '#F4A340' : 'rgba(244, 163, 64, 0.25)',
          borderColor: '#F4A340',
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.2,
        }}
        style={{
          borderRadius: '50%',
          borderWidth: isHovered ? '0px' : '1.5px',
        }}
      >
        {cursorText && (
          <div className="w-full h-full flex items-center justify-center text-[10px] font-bold tracking-widest text-brand-black uppercase text-center px-1">
            {cursorText}
          </div>
        )}
      </motion.div>

      {/* Tiny inner center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-brand-orange rounded-full pointer-events-none z-[10000]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 40,
          stiffness: 500,
        }}
      />
    </>
  );
};
