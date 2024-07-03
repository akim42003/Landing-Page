import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import Hero from './Hero';
import Projects from './Projects';

const Home = () => {
  return (
    <div>
        <Navbar />
        <div id="home">
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
