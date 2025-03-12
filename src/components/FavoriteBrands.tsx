"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const FavoriteBrands = () => {
  const router = useRouter();
  return (
    <main className="my-20 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-6">
        <div className="relative">
          <h1 className="text-2xl md:text-3xl font-bold text-black">
            MY FAVORITE BRANDS
          </h1>
        </div>

        {/* Star Image */}
        <div className="flex justify-center">
          <Image
            src="/images/star.svg" // Ensure the correct path is used
            alt="Star Icon"
            width={100}
            height={100}
            className="mx-auto"
          />
        </div>

        <div className="space-y-4 py-8">
          <h2 className="text-lg md:text-xl font-semibold text-black">
            You currently do not have any favorite brands selected
          </h2>
          <p className="text-black max-w-lg mx-auto leading-relaxed">
            Elevate your beauty experience and enjoy the perks of being part of
            an elite community that celebrates your passion for all things
            beautiful! Sign up today and let the pampering begin!
          </p>
        </div>

        <Button
          className="bg-primary text-sm  hover:bg-primary text-white font-semibold px-20 py-4 w-72 rounded-full transition-all duration-300 hover:scale-105"
          onClick={() => router.push("/points")}
        >
          SELECT BRANDS
        </Button>
      </div>
    </main>
  );
};

export default FavoriteBrands;
