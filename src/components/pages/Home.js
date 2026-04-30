import React, { useEffect } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import TickerStrip from '../TickerStrip';
import StatStrip from '../StatStrip';
import MoreInfo from '../MoreInfo';
import Footer from '../Footer';
import FeaturedProjects from '../FeaturedProjects';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <TickerStrip />
      <StatStrip />
      <MoreInfo />
      <FeaturedProjects />
      <Footer />
    </>
  );
}

export default Home;