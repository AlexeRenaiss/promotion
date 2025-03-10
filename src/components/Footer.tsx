import Link from "next/link";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#463373] to-[#1D2050] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Newsletter signup section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Hair More From Us</h2>
          <p className="text-sm max-w-2xl mx-auto mb-6">
            By proceeding, I agree to receive emails, including offers and new
            product information, from HairCode and other{" "}
            <Link href="#" className="underline">
              P&G brands
            </Link>{" "}
            that may interest me. Click to read{" "}
            <Link href="#" className="underline">
              P&G Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="h-px bg-gray-400/30 max-w-2xl mx-auto"></div>
        </div>

        {/* Social media icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <Link href="#" aria-label="Facebook">
            <Facebook size={24} />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Instagram size={24} />
          </Link>
          <Link
            href="#"
            aria-label="TikTok"
            className="flex items-center justify-center"
          >
            {/* Lucide doesn't have a TikTok icon, so we'll use a simplified version with MessageCircle */}
            <MessageCircle size={24} />
          </Link>
        </div>

        {/* Navigation links */}
        <div className="flex justify-center space-x-8 mb-8 text-sm">
          <Link href="/rewards">Rewards</Link>
          <Link href="/quiz">Quiz</Link>
          <Link href="/contact-us">Contact us</Link>
        </div>

        {/* Legal links */}
        <div className="text-xs text-center mb-4">
          <div className="flex flex-wrap justify-center gap-x-1 mb-2">
            <Link href="/terms">Terms & Conditions</Link>
            <span>|</span>
            <Link href="/privacy">Privacy</Link>
            <span>|</span>
            <Link href="/health-data">Consumer Health Data Privacy Policy</Link>
            <span>|</span>
            <Link href="/retailer-terms">
              Retailer Terms and Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/contact">Contact Us</Link>
            <span>|</span>
            <Link href="/your-privacy">Your Privacy Choices</Link>
            <span>|</span>
            <Link href="/do-not-sell">
              Do Not Sell or Share My Personal Information / Opt-Out of Targeted
              Advertising
            </Link>
          </div>
          <p>NOTICE: We may sell your sensitive personal data.</p>
          <p className="mt-4">©2025 Procter & Gamble</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
