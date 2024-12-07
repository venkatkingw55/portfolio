import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { experiences } from '../data/experience';
import FadeIn from './animations/FadeIn';
import ParallaxScroll from './animations/ParallaxScroll';

export default function Experience() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8 text-violet-900">Experience</h2>
          </FadeIn>
          <ParallaxScroll>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <FadeIn key={index} delay={index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
                  <ExperienceCard {...exp} />
                </FadeIn>
              ))}
            </div>
          </ParallaxScroll>
        </div>
      </div>
    </section>
  );
}