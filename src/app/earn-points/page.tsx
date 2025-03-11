import EarningSection from "../../components/EarningSection";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f7fc]">
      <Navbar />
      <HeroSection />
      <EarningSection />
      <Footer />
    </main>
  );
}
