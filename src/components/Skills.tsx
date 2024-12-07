import React from 'react';
import SkillCard from './SkillCard';
import { skillCategories } from '../data/skills';
import FadeIn from './animations/FadeIn';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
          </FadeIn>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {skillCategories.map((category, index) => (
              <FadeIn key={category.category} delay={index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
                <SkillCard {...category} />
              </FadeIn>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}