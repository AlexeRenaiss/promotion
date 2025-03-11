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
    <section className="flex flex-col md:flex-row-reverse items-center justify-between bg-[#FBE9D8]">
      {/* Image - Top in Mobile, Right in Desktop */}
      <div className="w-full md:w-1/2">
        <Image
          src="/images/banner2.png"
          alt="Beauty Code Loyalty Program"
          width={940}
          height={640}
          className="object-contain w-full"
        />
      </div>

      {/* Text Content - Below in Mobile, Left in Desktop */}
      <div className="w-full md:w-1/2 text-center md:text-left p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          Your rewards and savings start here.
        </h1>
        <p className="mt-4 text-gray-700">
          Sign up today and start earning points for gift cards, beauty gift
          baskets and digital discounts, and more!
        </p>

        {!user && (
          <>
            <button
              type="submit"
              className="mt-6 w-full max-w-sm py-3 bg-primary text-white font-bold rounded-full hover:bg-primary transition-colors"
              onClick={handleJoinNow}
            >
              SIGN UP NOW
            </button>
            <div className="text-black mt-6 pl-12">
              Already have an account?{" "}
              <Link href="/login" className="underline text-gray-800">
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
