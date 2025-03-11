"use client";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F5F7FB] p-4">
      <div className="max-w-lg w-full">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-6 py-2 bg-[#D81B60] text-white rounded-lg font-semibold hover:bg-[#B7154B] transition"
        >
          <span className="text-lg">←</span> Back
        </button>

        {/* Card */}
        <div className="mt-6 bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold text-[#1A1A1A]">
            Forgot Your Password?
          </h2>
          <p className="text-gray-600 mt-2">
            Fill in your email below to request a new password. An email will be
            sent to the address below containing a link to verify your email
            address.
          </p>

          <div className="mt-4">
            <label className="text-sm font-semibold text-[#1A1A1A]">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Required"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D81B60]"
            />
          </div>

          <button className="mt-6 w-full bg-[#D81B60] text-white font-semibold py-3 rounded-lg hover:bg-[#B7154B] transition">
            RESET PASSWORD
          </button>
        </div>
      </div>
    </div>
  );
}
