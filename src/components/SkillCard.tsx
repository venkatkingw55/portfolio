import React from 'react';
import { SkillCategory } from '../data/skills';
import { motion } from 'framer-motion';

export default function SkillCard({ category, skills }: SkillCategory) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-semibold mb-4 text-primary-800">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <motion.span 
            key={skill}
            className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm border border-primary-200"
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: '#f0f9ff',
              borderColor: '#0ea5e9' 
            }}
            whileTap={{ scale: 0.95 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  );
}