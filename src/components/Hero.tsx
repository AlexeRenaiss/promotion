"use client";
import Image from "next/image";
import Modal from "./Modal";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);
  const [user, setUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoginModalOpen(false);
    router.push("/login");
  };

  const handleJoinNow = () => {
    if (user) {
      router.push("/reward");
    } else {
      setIsLoginModalOpen(true);
    }
  };

  return (
    <section className="flex  mob:flex-col tab:flex-row items-center justify-between bg-[#f7e5cc] mob:mt-16 mt-8 tab:mt-12 smDesktop:mt-16">
      {/* Left: Image */}
      <div className="w-full mob:h-[300px] tab:w-1/2 tab:h-[400px] smDesktop:h-[500px] lg:h-[540px] relative">
        <Image
          src="/images/banner.png"
          alt="Beauty Code Loyalty Program"
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1024px) 100vw, 100vw"
          priority
        />
      </div>

      {/* Right: Text Content */}
      <div className="w-full mob:text-center tab:w-1/2 tab:text-left p-8 tab:p-6 smDesktop:p-16">
        <h1 className="text-xl mob:text-2xl tab:text-2xl smDesktop:text-4xl font-bold text-black mt-2">
          Join the Exclusive Beauty Code Loyalty Program!
        </h1>
        <p className="my-3 mob:mt-4 text-black text-lg tab:text-lg leading-relaxed">
          Elevate your beauty experience and enjoy the perks of being part of an
          elite community that celebrates your passion for all things beautiful!
          Sign up today and let the pampering begin!
        </p>

        <button
          type="submit"
          className="mt-4 mob:mt-6 w-full max-w-sm py-3 mob:py-4 text-sm bg-primary text-white font-bold rounded-full hover:bg-primary transition-colors"
          onClick={handleJoinNow}
        >
          {user ? "START EARNING" : "JOIN NOW"}
        </button>
      </div>

      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        login={handleLogin}
      />
    </section>
  );
};

export default Hero;
