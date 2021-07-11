import React from 'react';
import MainNav from '../components/navs/MainNav';
import HeroSection from '../components/sections/HeroSection';
import { ReactComponent as RightBand1 } from '../assets/right-band-1.svg';
import { ReactComponent as RightBand2 } from '../assets/right-band-2.svg';
import { ReactComponent as RightBand3 } from '../assets/right-band-3.svg';
import { ReactComponent as LeftBand1 } from '../assets/left-band-1.svg';
import { ReactComponent as LeftBand2 } from '../assets/left-band-2.svg';

const LandingPage = () => {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <MainNav />
            <HeroSection />

            <div className="relative -mt-8">
                <div className="absolute top-0 -right-96 md:-right-64 lg:-right-44 xl:-right-16">
                    <RightBand1 />
                </div>
                <div className="absolute top-15 -right-96 md:-right-64 lg:-right-44 xl:-right-16">
                    <RightBand2 />
                </div>
                <div className="absolute top-30 -right-96 md:-right-64 lg:-right-44 xl:-right-16">
                    <RightBand3 />
                </div>
                <div className="absolute top-38 md:top-44 lg:top-52 xl:top-60 -left-48 lg:-left-16 xl:left-0">
                    <LeftBand1 />
                </div>
                <div className="absolute top-52 md:top-58 lg:top-68 xl:top-76 -left-32 lg:-left-16 xl:left-0">
                    <LeftBand2 />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
