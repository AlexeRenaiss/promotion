import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FavoriteBrands from "../../components/FavoriteBrands";
import HeroSection from "../../components/HeroSection";
import MenuSection from "../../components/MenuSection";
import AccountInfoSection from "../../components/AccountInfoSection";

export default function AccountInformation() {
  return (
    <main className="min-h-screen bg-[#f4f7fc]">
      {/* Header */}
      <Navbar />
      <HeroSection />

      <AccountInfoSection />
      <Footer />
    </main>
  );
}
