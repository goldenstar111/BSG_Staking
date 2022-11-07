import React, { useState, useEffect } from "react";
import { Header, CoinSlider, CompanySlider, Footer, HeroSection, ImgInfoVideo, IntroAbout, IntroWithImage } from '../../../../components';
import LiveAutionSection from "../../../../components/LiveAutionSection";
import NFTHeroSection from "../../../../components/NFTHeroSection";
import NFTIntroAbout from "../../../../components/NFTIntroAbout";
import { ThemeContext } from "../../../../utils/theme/ThemeContext";
import NFTHeader from "../ListPage/NFTHeader";

const NFTLandPages = () => {
    const [menuToggling,setMenuToggling] = useState(false);
    return (
        <ThemeContext.Consumer>
        {({ isToggle, toggleTheme }) => (
        <main className="overflow-x-hidden">
            <NFTHeader menuToggling={menuToggling} setMenuToggling={setMenuToggling}/>
            <NFTHeroSection themeToggling={!isToggle} />
            <NFTIntroAbout />
            <LiveAutionSection/>
            <Footer />
        </main>
        )}
        </ThemeContext.Consumer>
    )
}
export default NFTLandPages;