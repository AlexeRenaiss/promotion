"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Modal from "./Modal";

const RewardsSignup: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);
  const [user, setUser] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(true);
    }
  }, []);

  const handleJoinNow = () => {
    if (user) {
      router.push("/reward");
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const handleLogin = () => {
    setIsLoginModalOpen(false);
    router.push("/login");
  };

  return (
    <section className="flex flex-row-reverse mob:flex-col tab:flex-row-reverse items-center justify-between bg-[#FBE9D8]">
      {/* Image - Top in Mobile, Right in Desktop */}
      <div className="w-full mob:h-[300px] tab:w-1/2 tab:h-[400px] smDesktop:h-[500px] lg:h-[540px] relative">
        <Image
          src="/images/banner2.png"
          alt="Beauty Code Loyalty Program"
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 50vw"
          priority
          // className="object-contain tab:object-cover"
        />
      </div>

      {/* Text Content - Below in Mobile, Left in Desktop */}
      <div className="w-full mob:text-center tab:w-1/2 tab:text-left p-6 mob:p-8 tab:p-10 smDesktop:p-12">
        <h1 className="text-xl mob:text-2xl tab:text-3xl smDesktop:text-4xl font-bold text-black">
          Your rewards and savings start here.
        </h1>
        <p className="mt-3 mob:mt-4 text-black">
          Sign up today and start earning points for gift cards, beauty gift
          baskets, digital discounts, and more!
        </p>

        {!user && (
          <>
            <button
              type="submit"
              className="text-sm mt-4 mob:mt-6 w-full max-w-sm py-3 mob:py-4 bg-primary text-white font-bold rounded-full hover:bg-primary transition-colors"
              onClick={handleJoinNow}
            >
              SIGN UP NOW
            </button>
            <div className="text-black mt-4 mob:mt-6 pl-6 mob:pl-12">
              Already have an account?{" "}
              <Link href="/login" className="underline text-black">
                Log in
              </Link>
            </div>
          </>
        )}
      </div>

      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        login={handleLogin}
      />
    </section>
  );
};

export default RewardsSignup;
