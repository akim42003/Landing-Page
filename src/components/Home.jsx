import React from 'react';
import Footer from './Footer';
import About from './About';
import Hero from './Hero';
import Projects from './Projects';

const Home = () => {
  return (
    <div>
        <div id="home" className="pt-20">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <Footer />
    </div>
  );
}

export default Home;
