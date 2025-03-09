import Image from "next/image";

import RewardsHeroSection from "./RewardsHeroSection";
import Navbar from "./Navbar";
import RewardSection from "./RewardSection";
import MoreWayToEarn from "./MoreWayToEarn";
import RewardSectionMobile from "./RewardSectionMobile";
import RewardsHeroSectionMobile from "./RewardsHeroSectionMobile";

export default function RewardPage() {
  return (
    <main className="min-h-screen" style={{ background: "#f4f7fc" }}>
      {/* Header */}

      <Navbar />
      {/* hero section */}

      <RewardsHeroSection />
      {/* <RewardsHeroSectionMobile /> */}

      {/* Rewards Section */}
      {/* <RewardSectionMobile /> */}
      <RewardSection />

      {/* More Ways to Earn Section */}
      <MoreWayToEarn />
    </main>
  );
}
