"use client";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
const paths = ["/account-info", "/points", "/account"];
export default function HeroSection({
  title = "Hello John",
  btnTitle = "SELECT BRANDS",
  showBalance = true,
  balanceStatus = false,
}: {
  title?: string;
  btnTitle?: string;
  showBalance?: boolean;
  balanceStatus?: boolean;
}) {
  const pathname = usePathname();
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[300px] bg-primary text-white mt-14">
      <h2 className="text-3xl tab:text-3xl font-bold mt-14 mb-4">{title}</h2>

      {/* Light Background to Keep the Bottom Cut Effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gray-100"></div>

      {/* Full-Width Card with Consistent Spacing Across Devices */}
      <div
        className="relative mt-6 bg-white shadow-lg rounded-xl p-6 tab:p-8 
                 justify-center flex flex-col items-center 
                 w-11/12 sm:w-4/5 sm:max-w-2xl smDesktop:max-w-7xl lg:max-w-7xl mx-auto px-4 sm:px-6 tab:px-8 
                 min-h-[300px] tab:min-h-[320px]"
      >
        {/* Background Image - Improved implementation for tablet */}
        <div
          className="absolute inset-0 z-0 opacity-80"
          style={{
            backgroundImage: "url('/images/hero.svg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>

        {/* Content with consistent sizing across devices */}
        <div className="relative z-10 text-center text-black pt-4">
          {balanceStatus && (
            <p className="text-2xl tab:text-3xl font-bold mb-4">
              Points History
            </p>
          )}
          <p className="text-4xl tab:text-5xl font-bold ">25</p>

          {balanceStatus && (
            <p className="mt-2">You have 25 points ready to be redeemed.</p>
          )}
          {!balanceStatus && (
            <>
              <p
                className={`text-xl tab:text-2xl font-medium pt-3 ${
                  showBalance ? "text-black" : "text-primary"
                }`}
              >
                {showBalance ? "Available Balance" : "My Points"}
              </p>
            </>
          )}
        </div>
        {paths.includes(pathname) && (
          <>
            <div className="relative z-10">
              <Button
                className="bg-primary mt-4 hover:bg-primary text-white font-semibold px-20 py-4 w-72 rounded-full transition-all duration-300 hover:scale-105"
                // onClick={() => router.push("/points")}
              >
                {btnTitle}
              </Button>
            </div>
            <p className="text-md text-black mt-2 underline font-bold">
              Points History
            </p>
          </>
        )}
      </div>
    </section>
  );
}
