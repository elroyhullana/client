import React, { useState } from 'react';

const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your form submission logic here
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
            placeholder="Your Name"
          />
        </label>
        <label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder="Your Email"
          />
        </label>
      </div>
      <label className="message-label">
        <textarea
          value={message}
          onChange={handleMessageChange}
          required
          placeholder="Your Message"
        />
      </label>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default EmailForm;
