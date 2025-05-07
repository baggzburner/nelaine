import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImage from '../assets/hero-image.png'; // Replace with your actual image file

function Hero() {
  return (
    <div className="container-fluid py-5" style={styles.heroSection}>
      <div className="row align-items-center">
        {/* Left: Text Content */}
        <div className="col-md-6 text-center text-md-start">
          <h1 style={styles.heading}>Experience True Comfort & Elegance</h1>
          <p style={styles.paragraph}>
            Discover luxurious loungewear that makes you feel confident, cozy, and effortlessly stylish—only at NelaineComfyWear.
          </p>
          <a href="#shop" className="btn" style={styles.button}>Shop Now</a>
        </div>

        {/* Right: Image */}
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img src={heroImage} alt="Comfy wear" style={styles.image} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  heroSection: {
    backgroundColor: '#fffdf9',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#b56d6d',
    fontFamily: 'Georgia, serif',
  },
  paragraph: {
    fontSize: '1.1rem',
    color: '#444',
    marginTop: '1rem',
    marginBottom: '1.5rem',
  },
  button: {
    backgroundColor: '#ffd900',
    color: '#000',
    padding: '10px 20px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
  },
  image: {
    width: '100%',
    maxWidth: '500px',
    borderRadius: '12px',
  },
};

export default Hero;
