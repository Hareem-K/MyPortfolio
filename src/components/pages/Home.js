import React, { useEffect } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';

function Home() {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />

        
        </>
    )
}

export default Home;