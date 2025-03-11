"use client";
import React, { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import Footer from "../../components/Footer";
import { useRouter } from "next/navigation";
import ExitModal from "../../components/ExitModal";

export default function LoginPage() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempted with:", { name, password });
  };

  const handleCreate = async () => {
    await localStorage.setItem("user", "user");
    router.push("/");
  };
  return (
    <div className="flex items-center justify-center  min-h-screen bg-gray-50 ">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg relative">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={() => setIsModalOpen(true)}
        >
          <X size={24} />
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="text-3xl font-bold">
            <span className="text-black">Beauty</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-teal-500">
              Code
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-center text-black mb-8">
          Please log in to get started
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-bold text-black">
              Name <span className="text-pink-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Required"
              className="w-full p-2 border border-gray-300 rounded-lg bg-gray-50"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 font-bold text-black"
            >
              Password <span className="text-pink-500">*</span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="Required"
              className="w-full p-2 border border-gray-300 bg-gray-50 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* reCAPTCHA */}
          <div className="mb-6">
            <div className="border border-gray-200 rounded p-3 flex items-center">
              <input type="checkbox" id="recaptcha" className="mr-2" />
              <label htmlFor="recaptcha" className="text-gray-700 text-sm">
                I'm not a robot
              </label>
              <div className="ml-auto">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center">
                  <span className="text-xs text-gray-500">reCAPTCHA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="mb-6 text-center">
            <Link
              href="/forgot-password"
              className="text-primary hover:text-primary underline"
            >
              Forgot your password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full font-bold py-3 bg-[#A1A2B4] text-white  rounded-full hover:bg-[#A1A2B4] transition-colors"
            onClick={handleCreate}
          >
            SIGN IN
          </button>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <span className="text-black text-sm">Don't have an account? </span>
            <Link
              href="/signup"
              className="text-black text-sm underline font-semibold hover:underline"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
      <ExitModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLeave={() => setIsModalOpen(false)}
      />
    </div>
  );
}
