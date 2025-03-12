"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup attempted with:", {
      name,
      email,
      password,
      agreedToTerms,
    });
  };

  const handleCreate = async () => {
    await localStorage.setItem("user", "user");
    router.push("/");
  };

  return (
    <div className="bg-[#f4f7fc] py-4">
      {/* Back Button */}

      <div className="p-4">
        <button
          onClick={() => router.back()}
          className="top-4 pl-4 pr-8 flex items-center gap-2 py-2 bg-primary text-white font-bold rounded-md hover:bg-rprimary transition md:py-2"
        >
          <Image
            src="/images/white.svg"
            alt="Back"
            width={8}
            height={8}
            className="mr-6"
          />
          Back
        </button>
        <div className="relative flex items-center justify-center  bg-[#f5f5f5]">
          <div className="w-full max-w-4xl p-4 px-6 rounded-2xl bg-white my-8">
            {/* Logo */}
            <div className="flex justify-center mb-8 mt-4">
              <div className="relative w-48 h-12">
                {/* Adjust width & height as needed */}
                <Image
                  src="/images/logo.svg" // Replace with your actual logo path
                  alt="Beauty Code Logo"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-xl md:text-2xl font-semibold text-center mb-6 text-[#171D52]">
              Sign up. Earn rewards. Do good.
            </h1>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-black">
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Required"
                    className="w-full p-2 border rounded-lg bg-gray-50"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-black">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Required"
                    className="w-full p-2 bg-gray-50 border rounded-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-black">
                    Password <span className="text-primary">*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Required"
                    className="w-full p-2 bg-gray-50 border rounded-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* reCAPTCHA */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 bg-gray-50 rounded-lg px-3 py-1 flex items-center">
                  <input
                    type="checkbox"
                    id="recaptcha"
                    className="mr-3 w-4 h-4 bg-gray-50 scale-150"
                  />
                  <label htmlFor="recaptcha" className="text-gray-700 text-sm">
                    I'm not a robot
                  </label>
                  <div className="ml-auto mr-5">
                    <div className="w-12 h-12 bg-gray-100 flex items-center justify-center">
                      <span className="text-xs text-gray-500">reCAPTCHA</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <p className="text-sm text-gray-700">
                By signing up, I agree to receive emails from P&G Good Everyday
                and other trusted{" "}
                <Link href="#" className="underline font-medium">
                  P&G brands
                </Link>{" "}
                as well as opting into the{" "}
                <Link href="#" className="underline font-medium">
                  P&G Good Everyday Rewards Program
                </Link>
                . I confirm I have read and agree to the{" "}
                <Link href="#" className="underline font-medium">
                  P&G Terms & Conditions
                </Link>
                ,{" "}
                <Link href="#" className="underline font-medium">
                  Notice of Financial Incentive
                </Link>{" "}
                and{" "}
                <Link href="#" className="underline font-medium">
                  Privacy Policy
                </Link>
                . Only available to US residents.
              </p>

              {/* Confirmation Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-3 w-5 h-5"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  required
                />
                <span className="text-sm font-bold text-black">
                  Ready to start saving? Check this box to confirm you've read
                  and consent to the information above.
                </span>
              </div>

              {/* Create Account Button */}
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="w-full max-w-lg py-3 bg-[#A1A2B4] text-white font-bold rounded-full hover:bg-[#A1A2B4] transition-colors"
                  onClick={handleCreate}
                >
                  CREATE ACCOUNT
                </button>
              </div>

              {/* Login Link */}
              <div className="mt-4 text-center">
                <span className="text-gray-700">Already have an account? </span>
                <Link href="/login" className="font-bold text-black underline">
                  Log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
