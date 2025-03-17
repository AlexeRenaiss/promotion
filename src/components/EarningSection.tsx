"use client";
import { useRouter } from "next/navigation";
export default function EarningSection() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center text-center py-8 mob:py-10 tab:py-12 my-6 mob:my-8 tab:my-12 smDesktop:my-16 px-3 mob:px-4 tab:px-6">
      <h2 className="text-xl mob:text-2xl font-bold text-black mb-4 mob:mb-6">
        Start Earning
      </h2>
      <div className="flex flex-row mob:flex-col tab:flex-row gap-4 mob:gap-6 w-full max-w-5xl">
        {/* Complete Your Profile */}
        <div className="w-full mob:w-full tab:w-1/3">
          <div
            className="flex items-center justify-between border border-[#3C6DCC] rounded-md py-4 mob:py-10 tab:p-3 bg-[#ebf0fa] hover:bg-[blue-100] transition shadow-md cursor-pointer"
            onClick={() => router.push("/reward")}
          >
            <h3 className="text-md mob:text-lg font-bold text-[#3C6DCC] flex-1 text-center">
              Complete Your Profile
            </h3>
            <img
              src="/images/blue.svg"
              alt="Arrow"
              className="mr-2 mob:mr-4 w-3 mob:w-4 h-3 mob:h-4"
            />
          </div>
          <p className="text-black mt-3 mob:mt-4">
            Earn 25 points + 1 sweepstakes entry when you complete your profile
          </p>
        </div>

        {/* Take a Quiz */}
        <div className="w-full mob:w-full tab:w-1/3">
          <div
            className="flex items-center justify-between border border-primary rounded-md py-4 mob:py-10 tab:p-3 bg-[#fbe9f1] hover:bg-[#fbe9f1] transition shadow-md cursor-pointer"
            onClick={() => router.push("/quiz")}
          >
            <h3 className="text-md mob:text-lg font-bold text-primary flex-1 text-center">
              Take a Quiz
            </h3>
            <img
              src="/images/red.svg"
              alt="Arrow"
              className="mr-2 mob:mr-4 w-3 mob:w-4 h-3 mob:h-4"
            />
          </div>
          <p className="text-black mt-3 mob:mt-4">
            Earn 25 points for each additional quiz you take + learn more about
            your style!
          </p>
        </div>

        {/* Refer a Friend */}
        <div className="w-full mob:w-full tab:w-1/3">
          <div className="flex items-center justify-between border border-[#E95C2B] rounded-md py-4 mob:py-10 tab:p-3 bg-[#fdefea] hover:bg-[#fdefea] transition shadow-md cursor-pointer">
            <h3 className="text-md mob:text-lg font-bold text-[#E95C2B] flex-1 text-center">
              Refer a Friend
            </h3>
            <img
              src="/images/orange.svg"
              alt="Arrow"
              className="mr-2 mob:mr-4 w-3 mob:w-4 h-3 mob:h-4"
            />
          </div>
          <p className="text-black mt-3 mob:mt-4">
            Earn 25 points for each friend who signs up for the Loyalty Program!
          </p>
        </div>
      </div>
    </div>
  );
}
