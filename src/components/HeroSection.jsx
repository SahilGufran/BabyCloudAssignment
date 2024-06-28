import React from 'react';
import heroImage from './Assets/Hero.png'; // Adjust path as necessary
import './styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <img src={heroImage} alt="Hero" className="hero-image"/>
    </section>
  );
}

export default HeroSection;
