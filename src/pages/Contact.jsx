import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent.`);
    // Programmatic navigation after form submission
    navigate('/');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Type your message here..."
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '1rem',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button type="submit">
              Send Message
            </button>
            <button
              type="button"
              className="secondary"
              onClick={() => setFormData({ name: '', email: '', message: '' })}
            >
              Clear Form
            </button>
          </div>
        </form>

        <div style={{ marginTop: '3rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
          <h3>Other Ways to Reach Us</h3>
          <div style={{ marginTop: '1rem' }}>
            <p style={{ marginBottom: '0.5rem' }}>
              <strong>📧 Email:</strong> prince.18505@cumail.in
            </p>
            <p style={{ marginBottom: '0.5rem' }}>
              <strong>🏫 Department:</strong> AIT-CSE CORE & AIML
            </p>
            <p style={{ marginBottom: '0.5rem' }}>
              <strong>📚 Course:</strong> Full Stack - II (23CSH-382)
            </p>
            <p>
              <strong>👨‍🏫 Instructor:</strong> Mr. Prince Pal Singh
            </p>
          </div>
        </div>

        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          background: '#d1ecf1',
          borderRadius: '8px',
          border: '1px solid #bee5eb',
          color: '#0c5460'
        }}>
          <strong>ℹ️ Note:</strong> This form demonstrates programmatic navigation. After submission,
          you'll be redirected to the home page using the useNavigate() hook.
        </div>
      </div>
    </div>
  );
}
