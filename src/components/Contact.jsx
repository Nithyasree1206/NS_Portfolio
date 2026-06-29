import { useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import SuccessModal from './SuccessModal';

const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');
  const [showModal, setShowModal] = useState(false);

  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'anunithya1206@gmail.com';
  const FORM_ENDPOINT = `https://formsubmit.co/ajax/${contactEmail}`;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setStatus('error');
      setFeedback('Please complete all fields before sending your message.');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setFeedback('Please enter a valid email address.');
      return;
    }

    setStatus('sending');
    setFeedback('');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          _subject: subject ? `${subject} — from ${name}` : `Portfolio Inquiry from ${name}`,
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFeedback('Thanks! Your message has been sent successfully. I\'ll get back to you soon.');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setShowModal(true);
      } else {
        throw new Error(data.message || 'Unable to send your message at this time.');
      }
    } catch (error) {
      setStatus('error');
      setFeedback(
        error.message === 'Failed to fetch'
          ? 'Network error. Please check your internet connection and try again.'
          : error.message || 'There was a problem sending your message. Please try again later.'
      );
      console.error('Contact form error:', error);
    }
  };

  const contactDetails = [
    { icon: '📧', label: 'Email', value: 'anunithya1206@gmail.com', href: 'mailto:anunithya1206@gmail.com' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/nithyasree-learner', href: 'https://www.linkedin.com/in/nithyasree-learner' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/Nithyasree1206', href: 'https://github.com/Nithyasree1206/' },
    { icon: '📸', label: 'Instagram', value: 'instagram.com/nithyasree', href: 'https://instagram.com/nithyasree' },
  ];

  return (
    <section id="contact" ref={ref}>

      {/* CTA Card */}
      <div className="container cta-section">
        <div className={`cta-card fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="cta-title">Let's build something remarkable</h2>
          <p className="cta-subtitle">
            Open to freelance projects, full-time roles, and creative collaborations.
          </p>
          <a href="#contact-form" className="cta-btn">
            Start a conversation <span className="arrow">↗</span>
          </a>
        </div>
      </div>

      {/* Contact Details + Form (Split Panel) */}
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        <div className={`contact-card-split fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <div className="contact-left">
            <h3 className="contact-left-title">Let's get in touch</h3>
            <p className="contact-left-sub">We're open for any suggestion or just to have a chat</p>

            <div className="contact-left-items">
              {contactDetails.map((item, i) => (
                <div key={i} className="contact-left-item">
                  <div className="contact-left-icon">
                    {item.label === 'Email' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75z" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M21 6.75l-9 6.5-9-6.5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    )}
                    {item.label === 'LinkedIn' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-12h4v2" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <rect x="2" y="8" width="4" height="12" rx="1" stroke="#ffffff" strokeWidth="1.2" />
                        <circle cx="4" cy="5" r="1.5" fill="#ffffff" />
                      </svg>
                    )}
                    {item.label === 'GitHub' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 3.87 2.6 7.14 6.2 7.83.45.08.55-.2.55-.4v-1.38c-2.5.54-3.02-1.2-3.02-1.2-.36-.93-.88-1.18-.88-1.18-.72-.48.06-.47.06-.47.8.06 1.22.82 1.22.82.71 1.22 1.86.87 2.32.66.07-.52.28-.87.5-1.07-2-.23-4.1-1-4.1-4.45 0-.98.35-1.78.92-2.4-.09-.23-.4-1.16.09-2.42 0 0 .75-.24 2.46.92A8.53 8.53 0 0 1 12 6.8c.76.003 1.53.1 2.24.29 1.7-1.16 2.45-.92 2.45-.92.49 1.26.19 2.19.09 2.42.57.62.92 1.42.92 2.4 0 3.46-2.1 4.22-4.1 4.44.29.26.54.77.54 1.55v2.3c0 .2.1.49.55.4C16.4 16.14 19 12.87 19 9c0-3.87-3.13-7-7-7z" fill="#ffffff" />
                      </svg>
                    )}
                    {item.label === 'Instagram' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <rect x="3" y="3" width="18" height="18" rx="5" stroke="#ffffff" strokeWidth="1.2" />
                        <path d="M8 11.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0z" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="17" cy="7" r="0.8" fill="#ffffff" />
                      </svg>
                    )}
                  </div>
                  <div className="contact-left-meta">
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer noopener" className="contact-left-link">{item.value}</a>
                    ) : (
                      <span className="contact-left-link">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-right">
            <h3 className="contact-right-title">Get in touch</h3>
            <form id="contact-form" className="contact-form split-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group half">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </div>
                <div className="form-group half">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                ></textarea>
              </div>

              <p className="contact-helper">Your message is sent securely via FormSubmit to {contactEmail}</p>
              {feedback && (
                <p className={`contact-feedback ${status === 'success' ? 'success' : 'error'}`}>{feedback}</p>
              )}

              <button type="submit" className="contact-submit-btn primary" disabled={status === 'sending'}>
                {status === 'sending' ? '⏳ Sending…' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <SuccessModal open={showModal} onClose={() => setShowModal(false)} message={feedback} />
    </section>
  );
};

export default Contact;
