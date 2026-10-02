import React, { useState } from 'react';
import { portfolioContent } from '../../content';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import WordReveal from '../WordReveal';
import emailjs from '@emailjs/browser';

export default function SectionContact() {
  const { contact, brand } = portfolioContent;

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

    const serviceId =
      (typeof process !== 'undefined' && (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || process.env.VITE_EMAILJS_SERVICE_ID)) ||
      contact.emailjs?.serviceId;
    const templateId =
      (typeof process !== 'undefined' && (process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || process.env.VITE_EMAILJS_TEMPLATE_ID)) ||
      contact.emailjs?.templateId;
    const publicKey =
      (typeof process !== 'undefined' && (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || process.env.VITE_EMAILJS_PUBLIC_KEY)) ||
      contact.emailjs?.publicKey;

    if (!serviceId || !templateId || !publicKey) {
      console.warn('EmailJS serviceId, templateId, or publicKey is missing.');
      setStatus({
        submitting: false,
        submitted: false,
        error: `Contact service is currently being refreshed. Please email directly to ${contact.email}.`,
      });
      return;
    }

    try {
      const templateParams = {
        name: formData.name,
        from_name: formData.name,
        email: formData.email,
        from_email: formData.email,
        reply_to: formData.email,
        message: formData.message,
        to_email: contact.email || 'hijaz.fd@gmail.com',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      // Keep technical diagnostics in console for developer debugging
      console.error('EmailJS submission error details:', err);

      // Clean, polite message for visitors without exposing internal API diagnostics
      setStatus({
        submitting: false,
        submitted: false,
        error: `Sorry, there was a temporary issue sending your message. Please email me directly at ${contact.email}.`,
      });
    }
  };

  return (
    <section id="contact" className="section-block section-contact">
      {/* Section Tag Badge */}
      <div className="section-tag-pill">
        <Send size={14} className="tag-icon" />
        <span>{contact.badge || 'CONTACT'}</span>
      </div>

      {/* Main Headline matching reference */}
      <WordReveal as="h2" className="contact-exact-heading" stagger={0.03} delay={0.05}>
        {contact.heading || 'If you have a general question, project idea, or just want to get in touch, feel free to drop me an email or fill out the form below.'}
      </WordReveal>

      {status.submitted && (
        <div className="form-alert success">
          <CheckCircle size={18} />
          <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
        </div>
      )}

      {status.error && (
        <div className="form-alert error">
          <AlertCircle size={18} className="form-alert-icon" />
          <div className="form-alert-body">
            <span>{status.error}</span>
            <a
              href={`mailto:${contact.email}?subject=Project%20Enquiry%20from%20${encodeURIComponent(formData.name || 'Visitor')}&body=${encodeURIComponent(formData.message || '')}`}
              className="form-alert-mailto-link"
            >
              Open in email app &rarr;
            </a>
          </div>
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

        <div className="contact-underline-row contact-underline-textarea-row">
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            placeholder="Project Description *"
            value={formData.message}
            onChange={handleChange}
            className="contact-underline-input contact-underline-textarea"
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
            href={`mailto:${contact.email}?subject=New%20Project%20Enquiry%20-%20Portfolio&body=Hi%20${encodeURIComponent(brand?.name || 'there')},%0A%0AI%20am%20reaching%20out%20to%20discuss%20a%20potential%20collaboration/project.%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ABest%20regards,`}
            className="contact-direct-email-link"
          >
            {contact.email}
          </a>
        </div>
      </form>

      {/* Philosophy Quote at Bottom matching reference screenshot */}
      {contact.quote?.text && (
        <div className="contact-quote-wrapper">
          <blockquote className="contact-steve-quote">
            “{contact.quote.text}“
          </blockquote>
          {contact.quote.author && (
            <span className="contact-quote-author">{contact.quote.author}</span>
          )}
        </div>
      )}
    </section>
  );
}
