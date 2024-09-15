import React from 'react';

function AboutSection() {
  return (
    <section id="about-section" className="section">
      <h1 id="greeting">Hi, I'm Furkan</h1>
      <p id="developer">MERN Developer</p>
      <div className="about-container">
        <div className="about-image">
          <img src={`${process.env.PUBLIC_URL}/images/unnamed.jpg`}  alt="Furkan Akar" /> {/* alt text güncellendi */}
        </div>
        <div className="about-content">
          <h2 id="about-title">About Me</h2>
          <p id="about-description">
          A passionate MERN stack developer with extensive experience in building dynamic and responsive web applications. 
          I specialize in full-stack development using JavaScript technologies, and I have a deep understanding of both frontend and backend architectures. 
          My focus is on delivering clean, efficient, and scalable solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
