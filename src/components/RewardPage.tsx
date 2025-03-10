import RewardsHeroSection from "./RewardsHeroSection";
import Navbar from "./Navbar";
import RewardSection from "./RewardSection";
import MoreWayToEarn from "./MoreWayToEarn";

export default function RewardPage() {
  return (
    <main className="min-h-screen" style={{ background: "#f4f7fc" }}>
      {/* Header */}

      <Navbar />
      {/* hero section */}
      <RewardsHeroSection />

      {/* Rewards Section */}
      <RewardSection />

      {/* More Ways to Earn Section */}
      <MoreWayToEarn />
    </main>
  );
}
