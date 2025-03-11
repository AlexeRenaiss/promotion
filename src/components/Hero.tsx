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
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#f7e5cc] mt-16">
      {/* Left: Image */}
      <div className="md:w-1/2 relative h-[400px] md:h-[540px]">
        <Image
          src="/images/banner.png"
          alt="Beauty Code Loyalty Program"
          fill
          className="object-cover"
        />
      </div>

      {/* Right: Text Content */}
      <div className="md:w-1/2 text-center md:text-left p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          Join the Exclusive Beauty Code Loyalty Program!
        </h1>
        <p className="mt-4 text-gray-700">
          Elevate your beauty experience and enjoy the perks of being part of an
          elite community that celebrates your passion for all things beautiful!
          Sign up today and let the pampering begin!
        </p>

        <button
          type="submit"
          className="mt-6 w-full max-w-sm py-3 bg-primary text-white font-bold rounded-full hover:bg-primary transition-colors"
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
