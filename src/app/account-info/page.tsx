import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import AccountInfoSection from "../../components/AccountInfoSection";

export default function AccountInformation() {
  return (
    <main className="min-h-screen bg-[#f4f7fc]">
      <Navbar />
      <HeroSection btnTitle="EARN POINTS" showBalance={false} />
      <AccountInfoSection />
      <Footer />
    </main>
  );
}
