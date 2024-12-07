import React from 'react';
import { Experience } from '../data/experience';
import { MapPin, Calendar, Building2, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ExperienceCard({ title, company, duration, location, description, achievements }: Experience) {
  return (
    <motion.div 
      className="mb-8 border-l-4 border-violet-500 pl-4 bg-white rounded-r-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
      whileHover={{ x: 4, scale: 1.01 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold text-violet-900">{title}</h3>
      <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
        <span className="flex items-center gap-1">
          <Building2 size={16} className="text-violet-500" />
          <span className="font-medium">{company}</span>
        </span>
        <span className="flex items-center gap-1">
          <Calendar size={16} className="text-violet-500" />
          <span>{duration}</span>
        </span>
        <span className="flex items-center gap-1">
          <MapPin size={16} className="text-violet-500" />
          <span className="text-sm">{location}</span>
        </span>
      </div>
      
      <div className="space-y-4">
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {description.map((item, index) => (
            <motion.li 
              key={index} 
              className="leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
        
        {achievements && achievements.length > 0 && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-violet-800 flex items-center gap-2 mb-2">
              <Award size={18} />
              Key Achievements
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {achievements.map((achievement, index) => (
                <motion.li 
                  key={index}
                  className="leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}