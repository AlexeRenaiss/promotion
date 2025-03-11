"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const RewardsSignup: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#FBE9D8]">
      {/* Image - Appears first (Top in Mobile, Left in Desktop) */}
      <div className="w-full md:w-1/2">
        <Image
          src="/images/banner2.png" // Replace with actual image path
          alt="Beauty Code Loyalty Program"
          width={940}
          height={640}
          className="object-contain w-full"
        />
      </div>

      {/* Text Content - Below in Mobile, Right in Desktop */}
      <div className="w-full md:w-1/2 text-center md:text-left p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          Your rewards and savings start here.
        </h1>
        <p className="mt-4 text-gray-700">
          Sign up today and start earning points for gift cards, beauty gift
          baskets and digital discounts, and more!
        </p>

        <button
          type="submit"
          className="mt-6 w-full max-w-sm py-3 bg-primary text-white font-bold rounded-full hover:bg-primary transition-colors"
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
    </section>
  );
};

export default RewardsSignup;
