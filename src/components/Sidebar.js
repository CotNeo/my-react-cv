import React from 'react';

function Sidebar({ time, date }) {
  return (
    <div className="sidebar">
      <h2 id="name">Furkan Akar</h2>
      <nav>
        <a href="#about-section" id="about-link">About</a>
        <hr className="menu-divider" />
        <a href="#skills-section" id="skills-link">Skills</a>
        <hr className="menu-divider" />
        <a href="#projects-section" id="projects-link">Projects</a>
        <hr className="menu-divider" />
        <a href="#contact-section" id="contact-link">Contact</a>
        <hr className="menu-divider" />
        <a href="#blog-section" id="blog-link">Blog</a>
      </nav>
      <div id="saat">
        <h3>Time in Turkey</h3>
        <p id="Saat" className="timedate">{`Saat: ${time}`}</p>
        <p id="Tarih" className="timedate">{`Tarih: ${date}`}</p>
        <p className="timedate">This Data is from World Time API</p>
      </div>
      <div className="social-links">
        <a href="https://github.com/CotNeo" title="Visit my GitHub Profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        <a href="https://linkedin.com/in/furkan-akar-7a176618a" title="Connect with me on LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="https://medium.com/@furkanaliakar" title="Read my Medium Articles" target="_blank" rel="noopener noreferrer"><i className="fab fa-medium"></i></a>
      </div>
    </div>
  );
}

export default Sidebar;
