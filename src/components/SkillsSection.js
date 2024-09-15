import React from 'react';

function SkillsSection() {
  return (
    <section id="skills-section" className="section">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill">
        <img src={`${process.env.PUBLIC_URL}/images/mongodb.png`} alt="MongoDB Logo" />
          <p>MongoDB</p>
        </div>
        <div className="skill">
        <img src={`${process.env.PUBLIC_URL}/images/expressjs.png`} alt="Express.js Logo" />
          <p>Express.js</p>
        </div>
        <div className="skill">
        <img src={`${process.env.PUBLIC_URL}/images/reactjs.png`} alt="React Logo" />
          <p>React</p>
        </div>
        <div className="skill">
        <img src={`${process.env.PUBLIC_URL}/images/nodejs.png`} alt="Node.js Logo" />
          <p>Node.js</p>
        </div>
        <div className="skill">
        <img src={`${process.env.PUBLIC_URL}/images/bootstrap.png`} alt="Bootstrap Logo" />
          <p>Bootstrap</p>
        </div>
        <div className="skill">
        <img src={`${process.env.PUBLIC_URL}/images/html5.png`} alt="HTML5 Logo" />
          <p>HTML5</p>
        </div>
        <div className="skill">
        <img src={`${process.env.PUBLIC_URL}/images/css3.png`} alt="CSS3 Logo" />
          <p>CSS3</p>
        </div>
        <div className="skill">
        <img src={`${process.env.PUBLIC_URL}/images/api.png`} alt="API Logo" />
          <p>API</p>
        </div>
        <div className="skill">
        <img src={`${process.env.PUBLIC_URL}/images/jvt.png`} alt="JWT Token Logo" />
          <p>JWT Token</p>
        </div>
        <div className="skill">
        <img src={`${process.env.PUBLIC_URL}/images/socketio.png`} alt="Socket.io Logo" />
          <p>Socket.io</p>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
