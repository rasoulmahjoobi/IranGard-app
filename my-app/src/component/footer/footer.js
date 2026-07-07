import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>IranGard</h2>
          <p>
            Discover Iran's breathtaking mountains, forests, deserts and
            historical treasures with experienced local guides.
          </p>
        </div>

        <div className="footer-contact">
          <h3 brand-green>Contact</h3>
          <p>📧 info@irangard.com</p>
          <p>📞 +98 21 1234 5678</p>
          <p>📍 Tehran, Iran</p>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2026 IranGard. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
