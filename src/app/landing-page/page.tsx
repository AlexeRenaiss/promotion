import EarningSection from "../../components/EarningSection";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import React from "react";
import RewardsSignup from "../../components/RewardsSignup";
import Footer from "../../components/Footer";
import RewardSection from "../../components/RewardSection";

const page = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <EarningSection />
      <RewardsSignup />
      <RewardSection />
      <Footer />
    </div>
  );
};

export default page;
