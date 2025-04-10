import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <style jsx>{`
        .navbar {
          background-color: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .navbar-container {
          max-width: 1280px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 16px;
          padding-right: 16px;
        }

        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 64px;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
        }

        .navbar-logo img {
          object-fit: contain;
          width: 150px;
          height: 120px;
        }

        .navbar-links {
          display: flex;
          gap: 16px;
        }

        .navbar-link {
          font-weight: bold;
          color: black;
          padding: 8px 16px;
          border-radius: 8px;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .navbar-link:hover {
          background-color: #3b82f6; /* Blue color */
          color: white;
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            {/* Logo */}
            <div className="navbar-logo">
              <a href="/i">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={150}
                  height={120}
                />
              </a>
            </div>

            {/* Navigation Links */}
            <div className="navbar-links">
              <a href="/home" className="navbar-link">
                Home
              </a>
              <a href="/about" className="navbar-link">
                About Us
              </a>
              <a href="/services" className="navbar-link">
                Our Services
              </a>
              <a href="/contact" className="navbar-link">
                Contact Us
              </a>
              <a href="/patient/appointment" className="navbar-link">
                Appointment
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
