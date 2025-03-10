import Navbar from "../../components/Navbar";
import RewardSectionMobile from "../../components/RewardSectionMobile";
import RewardsHeroSectionMobile from "../../components/RewardsHeroSectionMobile";

export default function RewardPage() {
  return (
    <main className="min-h-screen" style={{ background: "#f4f7fc" }}>
      <Navbar />
      <RewardsHeroSectionMobile />
      <RewardSectionMobile />
    </main>
  );
}
