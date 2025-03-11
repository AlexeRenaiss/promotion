"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#f5f5f5]">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-4 px-16 py-2 bg-red-600 text-white font-bold rounded-md  hover:bg-red-700 transition"
      >
        Back
      </button>

      <div className="w-full max-w-5xl p-8 rounded-lg bg-white my-8">
        {/* Logo */}
        <div className="text-center mb-6 text-3xl font-bold">
          <span className="text-black">Beauty</span>
          <span className="text-primary">Code</span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-center mb-6 text-black">
          Sign up. Earn rewards Do good
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-black">Name *</label>
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
                Email Address *
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
              <label className="block font-bold text-black">Password *</label>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* reCAPTCHA */}
            <div className="flex items-center border p-4 bg-gray-50 text-black rounded-lg">
              <input type="checkbox" className="mr-2" />
              <span>I’m not a robot</span>
            </div>
          </div>

          {/* Terms and Conditions */}
          <p className="text-sm text-gray-700">
            By signing up, I agree to receive emails from P&G Good Everyday and
            other trusted{" "}
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
              className="mr-3"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              required
            />
            <span className="text-sm font-bold text-black">
              Ready to start saving? Check this box to confirm you've read and
              consent to the information above.
            </span>
          </div>

          {/* Create Account Button */}
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="w-full max-w-lg py-3 bg-[#A1A2B4] text-white font-bold rounded-full hover:bg-[#A1A2B4] transition-colors"
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
  );
}
