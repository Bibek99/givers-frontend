import React from 'react';
import MainNav from '../components/navs/MainNav';
import HeroSection from '../components/sections/HeroSection';
import Stirps from '../components/sections/Stirps';

const LandingPage = () => {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <MainNav />
            <HeroSection />
            <Stirps />
        </div>
    );
};

export default LandingPage;
