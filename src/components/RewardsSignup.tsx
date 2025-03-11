"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./Button";

const RewardsSignup: React.FC = () => {
  const [showAll, setShowAll] = React.useState(false);
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#FBE9D8]">
      {/* left: Text Content */}
      <div className="md:w-1/2 text-center md:text-left p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          Your rewards and savings start here.
        </h1>
        <p className="mt-4 text-gray-700">
          Sign up today and start earning points for gift cards, beauty gift
          baskets and digital discounts, and more!
        </p>

        <button
          type="submit"
          className="mt-6 w-full max-w-sm py-2 bg-primary text-white font-bold rounded-full hover:bg-primary transition-colors"
        >
          SIGN UP NOW
        </button>

        <div className="text-black mt-6 pl-12">
          Already have an account?{" "}
          <Link href="/login" className="underline text-gray-800">
            Log in
          </Link>
        </div>
      </div>
      {/* right: Image */}
      <div className="md:w-1/2">
        <Image
          src="/images/banner2.png" // Replace with actual image path
          alt="Beauty Code Loyalty Program"
          width={940}
          height={640}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default RewardsSignup;
