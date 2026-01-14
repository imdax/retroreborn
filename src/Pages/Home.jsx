import React from "react";
import Navbar from "../Components/Navbar.jsx";
import HeroSection from "../Components/HeroSection";

import CurrentSeasonSection from "../Components/CurrentSeasonSection.jsx";
import LiveMatchCarousel from "../Components/LiveMatchCarousel.jsx";
import RankingsSnapshot from "../Components/RankingSnap.jsx";
import CircuitNews from "../Components/CircuitNews.jsx";
import CircuitMerch from "../Components/Merch.jsx";
import CommunitySection from "../Components/Community.jsx";
import Footer from "../Components/Footer.jsx";
function home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <LiveMatchCarousel />
      <RankingsSnapshot />
      <CircuitNews />
      <CircuitMerch />
      <CommunitySection />
      <Footer />
    </div>
  );
}

export default home;
