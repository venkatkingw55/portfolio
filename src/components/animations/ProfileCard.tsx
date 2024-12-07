import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

interface ProfileCardProps {
  imageUrl: string;
  fallbackUrl: string;
}

export default function ProfileCard({ imageUrl, fallbackUrl }: ProfileCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      scale={1.05}
      transitionSpeed={2000}
      className="w-64 h-64 rounded-2xl overflow-hidden"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.8
        }}
        className="w-full h-full relative group"
      >
        <img
          src={imageUrl}
          alt="Venkadeshwaran Ganesan"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (!target.src.includes('fallback')) {
              target.src = fallbackUrl;
            }
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
        />
      </motion.div>
    </Tilt>
  );
}