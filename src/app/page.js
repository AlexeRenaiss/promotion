import EarningSection from "../components/EarningSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import RewardSection from "../components/RewardSection";
import RewardsSignup from "../components/RewardsSignup";

export default function Home() {
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
}
