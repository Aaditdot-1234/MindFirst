"use client";
import React from 'react';
import './Navbar.css'

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='navbar'>
      <div className='header'>
        <h1>Mind First</h1>
      </div>
      <div className='navbarComp'>
        <a href='/'>Home</a>
        <a onClick={() => scrollToSection('news')}>News</a>
        <a onClick={() => scrollToSection('brain')}>Brain</a>
        <a onClick={() => scrollToSection('appointment')}>Contacts</a>
      </div>
      <div className='login'>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
