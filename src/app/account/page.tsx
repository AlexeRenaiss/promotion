import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FavoriteBrands from "../../components/FavoriteBrands";
import HeroSection from "../../components/HeroSection";
import MenuSection from "../../components/MenuSection";

export default function RewardPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fc]">
      {/* Header */}
      <Navbar />
      <HeroSection btnTitle="EARN POINTS" showBalance={false} />
      <FavoriteBrands />
      <MenuSection />
      <Footer />
    </main>
  );
}
