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

    // Create a FormData object to send the form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // Use the Formspree endpoint for your form
    const formEndpoint = 'https://formspree.io/f/xjvnvpdw';

    try {
      // Make a POST request to Formspree
      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      // Check if the request was successful
      if (response.ok) {
        console.log('Email sent successfully!');
        // Optionally, reset the form fields
        setName('');
        setEmail('');
        setMessage('');
      } else {
        console.error('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
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
          rows="10"
          cols="30"
        />
      </label>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default EmailForm;
