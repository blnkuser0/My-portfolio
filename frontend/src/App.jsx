import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import fallbackProjects from './data/projectsFallback';

export default function App() {
  const [projects, setProjects] = useState(fallbackProjects);

  useEffect(() => {
    let didCancel = false;
    const fetchWithTimeout = (resource, options = {}) => {
      const { timeout = 3000 } = options;
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);
      return fetch(resource, { ...options, signal: controller.signal }).finally(() => clearTimeout(id));
    };
    (async () => {
      try {
        const res = await fetchWithTimeout('/api/projects', { timeout: 2500 });
        if (!res.ok) throw new Error('Network response not ok');
        const data = await res.json();
        if (!didCancel && Array.isArray(data) && data.length) setProjects(data);
      } catch (err) {
        console.warn('Using fallback projects:', err.message);
      }
    })();
    return () => { didCancel = true; };
  }, []);

  return (
    <div className="app-root" lang="en">
      <Header />
      <main>
        <section id="about" aria-labelledby="about-heading"><About /></section>
        <section id="experience" aria-labelledby="experience-heading"><Experience /></section>
        <section id="projects" aria-labelledby="projects-heading"><Projects items={projects} /></section>
        <section id="contact" aria-labelledby="contact-heading"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}
