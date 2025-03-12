"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ForgotPassword() {
  const router = useRouter();

  return (
    <div className="bg-[#f4f7fc] min-h-screen p-4">
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
        <div className=" flex  justify-center">
          <div className=" mt-20    bg-[#f5f5f5] ">
            {/* Card */}
            <div className="bg-white rounded-lg shadow p-12 m-2  border border-gray-300 ">
              <h2 className="text-xl font-bold  text-black mb-4">
                Forgot Your Password?
              </h2>
              <p className="text-md text-black mb-6">
                Fill in your email below to request a new password. An email
                will be sent to the address below containing a link to verify
                your email address.
              </p>

              <div className="mb-4">
                <label className="block text-sm font-bold mb-1">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Required"
                  className="w-full p-2 border bg-[#f9f9f9] border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#D81B60]"
                />
              </div>
              <button
                type="submit"
                className="text-sm mt-4 w-full max-w-sm py-4 bg-primary text-white font-bold rounded-full hover:bg-primary transition-colors"
              >
                RESET PASSWORD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
