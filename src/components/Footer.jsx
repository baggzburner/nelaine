import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import Logo from '../assets/logo.png'


function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff' }} className="pt-5 pb-3 mt-5">
      <div className="container-fluid">
        <div className="container">
          <div className="row">

            {/* Logo & About */}
            <div className="col-md-3 mb-4">
              <img src={Logo} alt="Logo" style={{ width: '150px' }} />
              <p className="mt-3">NelaineComfyWear - Your comfort, our priority.</p>
            </div>

            {/* Quick Links */}
            <div className="col-md-3 mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                <li><a href="/shop_now" className="text-white text-decoration-none">Shop</a></li>
                <li><a href="/about" className="text-white text-decoration-none">About</a></li>
                <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-md-3 mb-4">
              <h5>Contact Us</h5>
              <p><FaPhone className="me-2" /> +2547123456789</p>
              <p><FaEnvelope className="me-2" /> nelaine@sales.com</p>
              <div className="d-flex gap-2 mt-2">
                <a href="#" className="text-white"><FaFacebookF /></a>
                <a href="#" className="text-white"><FaTwitter /></a>
                <a href="https://instagram.com/nelainecomfywear" className="text-white"><FaInstagram /></a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-md-3 mb-4">
              <h5>Newsletter</h5>
              <p>Subscribe to get the latest offers.</p>
              <form>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    required
                  />
                  <button className="btn btn-warning" type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
          <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
          <div className="text-center">
            <small>&copy; {new Date().getFullYear()} NelaineComfyWear. All rights reserved.</small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
