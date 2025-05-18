import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
    <div className="container py-5 my-5">
      <h2 className="text-center mb-4" style={{ color: "#b56d6d" }}>Contact Us</h2>

      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6 mb-4">
          <form>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Your Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="5" placeholder="Type your message..." required></textarea>
            </div>
            <button type="submit" className="btn btn-dark">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="col-md-6 mb-4">
          <div className="mb-3">
            <FaPhone className="me-2" />
            <strong>Phone:</strong> +254 726 923 896
          </div>
          <div className="mb-3">
            <FaEnvelope className="me-2" />
            <strong>Email:</strong> nelaine@sales.com
          </div>
          <div className="mb-3">
            <FaMapMarkerAlt className="me-2" />
            <strong>Location:</strong> Nairobi, Kenya
          </div>
          <div className="ratio ratio-16x9 mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.632557037456!2d36.821946415691265!3d-1.2920659990880364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d46c7b50e3%3A0x9a7e8a18e3179eb!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1619264739961!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Nelaine Location"
            ></iframe>
          </div>
          
        </div>
      </div>
      
    </div>
    <Footer />
    </>
    
  );
}

export default Contact;
