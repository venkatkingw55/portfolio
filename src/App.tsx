import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import DevOpsIcons from './components/DevOpsIcons';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50">
      <Header />
      <DevOpsIcons />
      <main>
        <Experience />
        <Skills />
      </main>
      <footer className="bg-primary-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Venkadeshwaran Ganesan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;