import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import MoreWayToEarn from "../../components/MoreWayToEarn";
import Navbar from "../../components/Navbar";
import RewardSection from "../../components/RewardSection";

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
      <MoreWayToEarn title={MoreWayToEarn} />
      <Footer />
    </main>
  );
}
