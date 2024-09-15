import React from 'react';

function BlogSection() {
  return (
    <section id="blog-section" className="section">
      <h2 id="blog-title">Blog</h2>
      <div className="blog-container">
        <div className="blog-post">
          <h3>Why MERN Development Should Be Supported and Learned</h3>
          <p>The MERN Stack has rapidly gained popularity in the world of modern web development.</p>
          <a href="https://medium.com/@furkanaliakar/why-mern-development-should-be-supported-and-learned-9f93f7e4af5e" target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
        <div className="blog-post">
          <h3>Benefits and Speed Advantages of the MERN Stack</h3>
          <p>The MERN Stack is a widely preferred technology stack in modern web development projects.</p>
          <a href="https://medium.com/@furkanaliakar/benefits-and-speed-advantages-of-the-mern-stack-aff0e6cd578b" target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
