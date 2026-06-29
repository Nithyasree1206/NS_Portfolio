const Footer = () => {
  const year = new Date().getFullYear();
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;
  
  return (
    <footer>
      <div className="container">
        <div className="footer-badge">Open to freelance and collaborations</div>
        <div className="footer-social">
          {contactEmail ? <a href={`mailto:${contactEmail}`}>✉️ Mail</a> : null}
          <a href="https://www.linkedin.com/in/nithyasree-learner?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer noopener">💼 LinkedIn</a>
          <a href="https://github.com/Nithyasree1206/" target="_blank" rel="noreferrer noopener">🐙 GitHub</a>
          <a href="https://www.instagram.com/ms_nithyasree?igsh=ZTNxMDYzZGRyM3dn" target="_blank" rel="noreferrer noopener">📸 Instagram</a>
        </div>
        <p className="footer-copy">© {year} Nithyasree. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
