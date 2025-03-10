import Navbar from "./Navbar";
import RewardSection from "./RewardSection";
import MoreWayToEarn from "./MoreWayToEarn";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

export default function RewardPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fc]">
      {/* Header */}
      <Navbar />
      {/* hero section */}
      <HeroSection />
      {/* Rewards Section */}
      <RewardSection />

      {/* More Ways to Earn Section */}
      <MoreWayToEarn />
      <Footer />
    </main>
  );
}
