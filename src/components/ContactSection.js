import React from 'react';

function ContactSection({ email, setEmail, message, setMessage, handleSubmit, resultMessage }) {
  return (
    <section id="contact-section" className="section">
      <h2 id="contact-title">Contact</h2>
      <div className="contact-container">
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
        <div id="result-message" className="disabled-button">{resultMessage}</div>
      </div>
    </section>
  );
}

export default ContactSection;
