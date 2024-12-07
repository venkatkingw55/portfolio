import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from './animations/FadeIn';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-violet-700 to-indigo-700 text-white py-20 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1451187580459-43490279c0fa)`
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-8">
            <div>
              <FadeIn>
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-200"
                  whileHover={{ scale: 1.02 }}
                >
                  Venkadeshwaran Ganesan
                </motion.h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <motion.p 
                  className="text-xl text-violet-200 mb-2"
                  whileHover={{ x: 10 }}
                >
                  DevOps Engineer
                </motion.p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-violet-100 mb-6">Specializing in cloud infrastructure and automation</p>
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-4 items-center text-sm">
              {[
                { href: "mailto:venkadeshw55@gmail.com", icon: Mail, text: "venkadeshw55@gmail.com" },
                { href: "https://www.linkedin.com/in/venkadeshwaran-ganesan-8775b0184", icon: Linkedin, text: "LinkedIn" },
                { href: "https://github.com/venkatkingw55?tab=repositories", icon: Github, text: "GitHub" }
              ].map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 hover:text-violet-200 transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                  target={link.icon !== Mail ? "_blank" : undefined}
                  rel={link.icon !== Mail ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <link.icon size={16} />
                  {link.text}
                </motion.a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </header>
  );
}