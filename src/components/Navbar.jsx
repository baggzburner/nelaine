import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../assets/logo.png'; // Adjust if your path is different

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={styles.navbar}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="NelaineComfyWear Logo" style={styles.logo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/" style={styles.link}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="shop_now" style={styles.link}>Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={styles.link}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={styles.link}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#fdf2f0',
    padding: '10px 20px',
    borderBottom: '1px solid #e3cfcf',
  },
  logo: {
    height: '60px', // Increased logo size
    width: 'auto',
    borderRadius: '12px',
  },
  link: {
    color: '#b56d6d',
    fontSize: '16px',
    marginLeft: '15px',
  },
};

export default Navbar;
