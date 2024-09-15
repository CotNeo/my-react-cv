import React from 'react';

function ProjectsSection() {
  return (
    <section id="projects-section" className="section">
      <h2 id="projects-title">Projects</h2>
      <div className="projects-container">
        <div className="project">
          <h3>CCTV Viewer Application</h3>
          <p>A video-sharing application where an admin can upload .mp4 and .avi video files, manage them, and share them with users. It includes role-based access control and JWT authentication.</p>
          <a href="https://github.com/CotNeo/cctv-viewer" rel="noopener noreferrer" target="_blank">View on GitHub</a>
        </div>
        <div className="project">
          <h3>MMS Sending Application</h3>
          <p>A web application that uses the Twilio API to send MMS messages. Users input their name, email, phone number, and media URL, and the message is sent via Twilio.</p>
          <a href="https://github.com/CotNeo/mms_project" rel="noopener noreferrer" target="_blank">View on GitHub</a>
        </div>
        <div className="project">
          <h3>Restaurant Order Management System</h3>
          <p>An application for managing restaurant orders. It allows administrators to add new meals, place orders, view current orders, and delete processed orders.</p>
          <a href="https://github.com/CotNeo/restaurant-order-management-system" rel="noopener noreferrer" target="_blank">View on GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
