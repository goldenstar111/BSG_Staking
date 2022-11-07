import React, { useState, useEffect } from "react";
import { Header, CoinSlider, CompanySlider, Footer, HeroSection, ImgInfoVideo, IntroAbout, IntroWithImage } from '../components';
const LandPages = () => {
    const [menuToggle ,setMenuToggle]= useState(false);
    return (
        <main>
            <Header menuToggling={menuToggle} setMenuToggling={setMenuToggle} />
            <HeroSection />
            <IntroAbout />
            <IntroWithImage />
            <CoinSlider />
            <ImgInfoVideo />
            <CompanySlider />
            <Footer />
        </main>)
}

export default LandPages;