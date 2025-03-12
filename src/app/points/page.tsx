import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FavoriteBrands from "../../components/FavoriteBrands";
import HeroSection from "../../components/HeroSection";
import MenuSection from "../../components/MenuSection";
import PointsRewardsDashboard from "../../components/PointsEarnedTab";

// Types for our component
interface PointEntry {
  id: string;
  date: string;
  action: string;
  status: "Approved" | "Pending" | "Declined";
  points: number;
}
interface RewardEntry {
  id: string;
  item: string;
  points: number;
  date?: string;
}

const sampleRewardEntries: RewardEntry[] = [
  // This is empty by default to match the screenshot
  // Add sample data like this when needed:
  {
    id: "1",
    date: "01/13/25",
    item: "Gidt Card Load Test",
    points: 5,
  },
  {
    id: "2",
    date: "01/10/25",
    item: "Gidt Card Load Test",
    points: 5,
  },
];

const samplePointEntries: PointEntry[] = [
  {
    id: "1",
    date: "02/27/25",
    action: "Enrollment Bonus",
    status: "Approved",
    points: 25,
  },
  {
    id: "2",
    date: "03/05/25",
    action: "Enrollment Bonus",
    status: "Approved",
    points: 20,
  },
  {
    id: "3",
    date: "03/05/25",
    action: "Enrollment Bonus",
    status: "Approved",
    points: 20,
  },
];

export default function RewardPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fc]">
      {/* Header */}
      <Navbar />
      <HeroSection balanceStatus={true} />
      <PointsRewardsDashboard
        pointEntries={samplePointEntries}
        rewardEntries={sampleRewardEntries}
      />
      ;
      <Footer />
    </main>
  );
}
