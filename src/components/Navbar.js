import React from 'react';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#about-me">About Me</a>
      <a href="#work-experience">Work Experience</a>
      <a href="#education">Education</a>
      <a href="#projects">Projects</a>
      <a href="#art">Art</a>
    </div>
  );
};

export default Navbar;