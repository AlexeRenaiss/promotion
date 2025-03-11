"use client";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
const paths = ["/account-info", "/points", "/account"];
export default function HeroSection() {
  const pathname = usePathname();
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[300px] bg-primary text-white mt-14">
      <h2 className="text-3xl md:text-3xl font-bold mt-14 mb-4">Hello John</h2>

      {/* Light Background to Keep the Bottom Cut Effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gray-100"></div>

      {/* Full-Width Card with Consistent Spacing Across Devices */}
      <div
        className="relative mt-6 bg-white shadow-lg rounded-xl p-6 md:p-8 
                 justify-center flex flex-col items-center 
                 w-11/12 sm:w-4/5 sm:max-w-2xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 
                 min-h-[300px] md:min-h-[320px]"
      >
        {/* Background Image - Improved implementation for tablet */}
        <div
          className="absolute inset-0 z-0 opacity-80"
          style={{
            backgroundImage: "url('/images/hero.svg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // Changed from "contain" to "cover"
          }}
        ></div>

        {/* Content with consistent sizing across devices */}
        <div className="relative z-10 text-center text-black pt-4">
          <p className="text-3xl md:text-5xl font-bold ">25</p>
          <p className="text-lg md:text-2xl font-medium pt-3">
            Available Balance
          </p>
        </div>
        {paths.includes(pathname) && (
          <>
            <Button
              className="bg-primary  mt-4 hover:bg-primary text-white font-semibold px-20 py-4 w-72 rounded-full transition-all duration-300 hover:scale-105"
              // onClick={() => router.push("/points")}
            >
              SELECT BRANDS
            </Button>
            <p className="text-md text-black mt-2 underline font-bold">
              Points History
            </p>
          </>
        )}
      </div>
    </section>
  );
}
