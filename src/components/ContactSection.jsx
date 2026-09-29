import React, { useState } from 'react';
import { portfolioContent } from '../data/portfolioContent';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const { contact, socialLinks } = portfolioContent;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'submitting', message: 'Sending message...' });

    try {
      // Build form urlencoded data for Google Apps Script
      const formBody = new URLSearchParams();
      Object.keys(formData).forEach((key) => {
        formBody.append(key, formData[key]);
      });

      await fetch(contact.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
        mode: 'no-cors', // standard for Google Script form handler
      });

      setStatus({
        state: 'success',
        message: 'Thank you! Your message has been sent successfully.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus({
        state: 'error',
        message: 'Could not send message automatically. Please reach out via WhatsApp or email directly.',
      });
    }
  };

  return (
    <section id="contact" className="section-block contact-section">
      <div className="section-container">
        <div className="contact-layout">
          {/* Left Info Column */}
          <div className="contact-info-col">
            <span className="section-badge">{contact.badge}</span>
            <h2 className="section-title">{contact.heading}</h2>
            <p className="section-subtitle">{contact.subtitle}</p>

            <div className="contact-channels">
              <a href={`mailto:${contact.email}`} className="channel-card">
                <div className="channel-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="channel-label">Email</div>
                  <div className="channel-value">{contact.email}</div>
                </div>
              </a>

              <a href="https://wa.me/918714330170/" target="_blank" rel="noreferrer" className="channel-card whatsapp-highlight">
                <div className="channel-icon whatsapp-icon">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div className="channel-label">WhatsApp & Call</div>
                  <div className="channel-value">{contact.phone}</div>
                </div>
              </a>

              <div className="channel-card">
                <div className="channel-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="channel-label">Location</div>
                  <div className="channel-value">{contact.location}</div>
                </div>
              </div>
            </div>

            {/* Social pills */}
            <div className="social-links-row">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </div>

          {/* Right Form Column */}
          <div className="contact-form-col">
            <div className="form-card">
              <h3 className="form-card-title">Send a Message</h3>
              
              {status.state === 'success' && (
                <div className="status-banner success">
                  <CheckCircle2 size={18} />
                  <span>{status.message}</span>
                </div>
              )}

              {status.state === 'error' && (
                <div className="status-banner error">
                  <AlertCircle size={18} />
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="form-name">Your Name</label>
                    <input
                      type="text"
                      id="form-name"
                      name="name"
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="form-email">Email Address</label>
                    <input
                      type="email"
                      id="form-email"
                      name="email"
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="form-subject">Subject</label>
                  <input
                    type="text"
                    id="form-subject"
                    name="subject"
                    placeholder="Project Inquiry / Mobile App Development"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-message">Message</label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows="4"
                    placeholder="Tell me about your project, timeline, and goals..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-submit"
                  disabled={status.state === 'submitting'}
                >
                  <Send size={16} />
                  <span>{status.state === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
