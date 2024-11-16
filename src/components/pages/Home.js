import React, { useEffect } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import MoreInfo from '../MoreInfo';
import Footer from '../Footer';
import FeaturedProjects from '../FeaturedProjects';

function Home() {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <HeroSection />
            <Cards />
            <MoreInfo />
            <FeaturedProjects />
            <Footer />
            
        
        </>
    )
}

export default Home;