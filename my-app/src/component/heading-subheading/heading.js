import { useState } from "react";
import "./heading.css";
import Modal from "../modals/modals";

function Heading() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //   for making the login inputs empty
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function closeAll() {
    setIsAboutOpen(false);
    setIsContactOpen(false);
    setIsLoginOpen(false);
  }

  // change the state of login btn and save data in localStorage
  function handleLoginSubmit(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    localStorage.setItem("user", JSON.stringify({ email, password }));

    closeAll();

    setIsLoggedIn(true);

    setEmail("");
    setPassword("");
  }

  //   activate logout btn
  function handleLogout() {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  }

  // creating UI
  return (
    <div className="main-container">
      <header className="head">
        <div className="logo">
          <svg
            width="100"
            height="100"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="95" fill="#0F6E56" />
            <circle cx="100" cy="70" r="18" fill="#EF9F27" />
            <path
              d="M 30 145 L 70 85 L 100 125 L 130 80 L 170 145 Z"
              fill="#1D9E75"
            />
            <path
              d="M 20 150 L 65 70 L 95 115 L 115 90 L 180 150 Z"
              fill="#04342C"
            />
            <path d="M 65 70 L 75 82 L 65 85 L 55 82 Z" fill="#FFFFFF" />
            <path d="M 115 90 L 122 98 L 115 101 L 108 98 Z" fill="#FFFFFF" />
            <rect x="0" y="150" width="200" height="10" fill="#04342C" />
          </svg>
          <span className="text-brand">IranGard</span>
        </div>

        <div className="head-btn-container">
          <button className="head-btn">Tours</button>
          <button className="head-btn" onClick={() => setIsAboutOpen(true)}>
            About
          </button>
          <button className="head-btn" onClick={() => setIsContactOpen(true)}>
            Contact
          </button>
        </div>

        {!isLoggedIn && (
          <div className="login-btn-container">
            <button className="login-btn" onClick={() => setIsLoginOpen(true)}>
              Login
            </button>
          </div>
        )}

        {isLoggedIn && (
          <div className="logout-btn-container">
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </header>

      {/* About Modal */}
      <Modal
        isOpen={isAboutOpen}
        onClose={closeAll}
        title={
          <>
            About <span className="text-brand">IranGard</span>
          </>
        }
      >
        <p>
          IranGard is a nature tourism company dedicated to connecting
          travelers with Iran's breathtaking landscapes — from the towering
          peaks of Damavand to the golden dunes of Maranjab Desert and the
          misty forests of Abr.
        </p>
        <p>
          Founded by a team of passionate hikers and local guides, we believe
          adventure should be safe, sustainable, and unforgettable. Every tour
          is led by experienced professionals who know the land and respect
          it.
        </p>
        <p>
          Our mission is simple: help you discover Iran's wild beauty, one
          trail at a time.
        </p>
      </Modal>

      {/* Contact Modal */}
      <Modal isOpen={isContactOpen} onClose={closeAll} title="Contact Us">
        <p>
          Have a question about our tours, or need help planning your trip?
          We'd love to hear from you.
        </p>
        <ul className="contact-list">
          <li>
            <strong>Email:</strong> info@irangard.com
          </li>
          <li>
            <strong>Phone:</strong> +98 21 1234 5678
          </li>
          <li>
            <strong>Address:</strong> Tehran, Iran
          </li>
          <li>
            <strong>Hours:</strong> Sat–Thu, 9:00 AM – 6:00 PM
          </li>
        </ul>
      </Modal>

      {/* Login Modal */}
      <Modal isOpen={isLoginOpen} onClose={closeAll} title="Login">
        <p className="modal-subtitle">
          Welcome! Log in to book tours and track your trips.
        </p>
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <input
            className="login-input"
            type="email"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="submit-btn">
            Log In
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default Heading;