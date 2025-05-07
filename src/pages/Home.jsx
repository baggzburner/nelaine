import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Cta from '../components/Cta';
import NewArrivals from '../components/NewArrivals';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Cta />
      <NewArrivals />
      <Footer />
    </div>
  );
}

export default Home;
