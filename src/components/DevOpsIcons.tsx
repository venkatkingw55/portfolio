import React from 'react';
import { motion } from 'framer-motion';
import { devopsLogos } from '../assets/images';

const devopsImages = Object.entries(devopsLogos).map(([key, value]) => ({
  url: value.primary,
  fallback: value.fallback,
  name: key.charAt(0).toUpperCase() + key.slice(1)
}));

export default function DevOpsIcons() {
  return (
    <div className="py-12 bg-gradient-to-b from-violet-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-8 text-violet-900"
          >
            Technologies & Tools
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-8">
            {devopsImages.map((image, index) => (
              <motion.div
                key={image.name}
                className="w-24 h-24 relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={image.url}
                  alt={image.name}
                  className="w-full h-full object-contain filter transition-all duration-300 group-hover:brightness-110"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('fallback')) {
                      target.src = image.fallback;
                    }
                  }}
                />
                <motion.div
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ y: -10 }}
                  whileHover={{ y: 0 }}
                >
                  <span className="text-sm font-medium text-violet-700 whitespace-nowrap">
                    {image.name}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}