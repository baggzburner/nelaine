import React from "react";
import Footer from "../components/Footer";
import Logo from '../assets/logo.png'

function About() {
  return (
    <>
      <div className="container py-5 my-5">
        <h2 className="text-center mb-4" style={{ color: "#b56d6d" }}>
          About Us
        </h2>

        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={Logo}
              alt="Nelaine Logo"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h4 className="mb-3">Who We Are</h4>
            <p className="text-muted">
              Nelaine Comfy Wear is a Kenyan-based fashion brand dedicated to
              offering stylish and affordable wear for all occasions. We
              prioritize comfort, confidence, and class in everything we design.
            </p>
            <p className="text-muted">
              Since our founding, we've served hundreds of happy customers with
              quality pieces, excellent service, and fast delivery. Our goal is
              to bring comfort and fashion together – for you.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
            <h4 className="mb-3">Our Mission</h4>
            <p className="text-muted">
              To empower individuals with comfortable and fashionable wear that
              fits every lifestyle.
            </p>
          </div>
          <div className="col-md-6">
            <h4 className="mb-3">Why Choose Us?</h4>
            <ul className="text-muted">
              <li>Affordable fashion with premium quality</li>
              <li>Quick and reliable customer service</li>
              <li>High quality clothes</li>
              
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
