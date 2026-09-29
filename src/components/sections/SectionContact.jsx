import React, { useState } from 'react';
import { portfolioContent } from '../../data/portfolioContent';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import WordReveal from '../WordReveal';

export default function SectionContact() {
  const { contact } = portfolioContent;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const urlEncoded = new URLSearchParams();
      urlEncoded.append('name', formData.name);
      urlEncoded.append('email', formData.email);
      urlEncoded.append('subject', 'Portfolio Project Enquiry - Hijaz C');
      urlEncoded.append('message', formData.message);

      await fetch(contact.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: urlEncoded.toString(),
        mode: 'no-cors',
      });

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please reach out directly to mhcnkd4@gmail.com',
      });
    }
  };

  return (
    <section id="contact" className="section-block section-contact scroll-reveal">
      {/* Section Tag Badge */}
      <div className="section-tag-pill">
        <Send size={14} className="tag-icon" />
        <span>CONTACT</span>
      </div>

      {/* Main Headline matching reference */}
      <WordReveal as="h2" className="contact-exact-heading" stagger={0.03} delay={0.05}>
        If you have a general or project enquiry, please drop me an email or fill the form – available now
      </WordReveal>

      {status.submitted && (
        <div className="form-alert success">
          <CheckCircle size={18} />
          <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
        </div>
      )}

      {status.error && (
        <div className="form-alert error">
          <AlertCircle size={18} />
          <span>{status.error}</span>
        </div>
      )}

      {/* Minimal Inline Form matching reference screenshot */}
      <form onSubmit={handleSubmit} className="contact-isak-form">
        <div className="contact-underline-row">
          <input
            type="text"
            id="contact-name"
            name="name"
            required
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            className="contact-underline-input"
          />
        </div>

        <div className="contact-underline-row">
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            className="contact-underline-input"
          />
        </div>

        <div className="contact-underline-row">
          <input
            type="text"
            id="contact-message"
            name="message"
            required
            placeholder="Project Description"
            value={formData.message}
            onChange={handleChange}
            className="contact-underline-input"
          />
        </div>

        {/* Action Row: Left button + Right Email address */}
        <div className="contact-action-row">
          <button
            type="submit"
            disabled={status.submitting}
            className="contact-submit-pill-btn"
          >
            {status.submitting ? (
              <>
                <Loader2 size={16} className="spinner-icon" />
                <span>Sending...</span>
              </>
            ) : (
              <span>Send Message</span>
            )}
          </button>

          <a
            href={`mailto:${contact.email}`}
            className="contact-direct-email-link"
          >
            {contact.email}
          </a>
        </div>
      </form>

      {/* Philosophy Quote at Bottom matching reference screenshot */}
      <div className="contact-quote-wrapper">
        <blockquote className="contact-steve-quote">
          “First, solve the problem. Then, write the code.“
        </blockquote>
        <span className="contact-quote-author">John Johnson</span>
      </div>
    </section>
  );
}
