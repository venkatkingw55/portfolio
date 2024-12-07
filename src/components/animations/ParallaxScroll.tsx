import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxScrollProps {
  children: React.ReactNode;
  offset?: number;
}

export default function ParallaxScroll({ children, offset = 50 }: ParallaxScrollProps) {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  const { scrollY } = useScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const y = useTransform(scrollY, [initial, final], [offset, -offset]);

  useEffect(() => {
    if (!ref) return;
    const setValues = () => {
      setElementTop(ref.offsetTop);
      setClientHeight(window.innerHeight);
    };
    setValues();
    window.addEventListener('resize', setValues);
    return () => window.removeEventListener('resize', setValues);
  }, [ref]);

  return (
    <motion.div ref={setRef} style={{ y }}>
      {children}
    </motion.div>
  );
}