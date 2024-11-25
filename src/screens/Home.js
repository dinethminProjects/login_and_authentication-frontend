import React from 'react'
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import LatestArrivals from "../components/LatestArrivals";
import CommunitySection from "../components/CommunitySection";
import CategorySection from "../components/CategorySection";
import ConnectSection from "../components/ConnectSection";

function Home() {
    return (

        <div>
           <HeroSection/>
            <LatestArrivals/>
            <CommunitySection/>
            <CategorySection/>
            <ConnectSection/>
        </div>
    )
}

export default Home
