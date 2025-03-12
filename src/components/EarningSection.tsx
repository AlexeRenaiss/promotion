"use client";
import { useRouter } from "next/navigation";
export default function EarningSection() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center text-center py-10 my-8 md:my-16 px-4 sm:px-6">
      <h2 className="text-2xl font-bold text-black mb-6">Start Earning</h2>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl">
        {/* Complete Your Profile */}
        <div>
          <div
            className="flex items-center justify-between border border-[#3C6DCC] rounded-md py-10 md:p-3 bg-[#ebf0fa] hover:bg-[blue-100] transition shadow-md cursor-pointer"
            onClick={() => router.push("/reward")}
          >
            <h3 className="text-lg font-bold text-[#3C6DCC] flex-1 text-center">
              Complete Your Profile
            </h3>
            <img
              src="/images/blue.svg"
              alt="Arrow"
              className="mr-4 w-4 h-4 md:w-3 md:h-3"
            />
          </div>

          <p className="text-black mt-4">
            Earn 25 points + 1 sweepstakes entry when you complete your profile
          </p>
        </div>

        {/* Take a Quiz */}
        <div>
          <div
            className="flex items-center justify-between border border-primary rounded-md py-10 md:p-3 bg-[#fbe9f1] hover:bg-[#fbe9f1] transition shadow-md cursor-pointer"
            onClick={() => router.push("/quiz")}
          >
            <h3 className="text-lg font-bold text-primary flex-1 text-center">
              Take a Quiz
            </h3>
            <img
              src="/images/red.svg"
              alt="Arrow"
              className="mr-4 w-4 h-4 md:w-3 md:h-3"
            />
          </div>
          <p className="text-black mt-4">
            Earn 25 points for each additional quiz you take + learn more about
            your style!
          </p>
        </div>

        {/* Refer a Friend */}
        <div>
          <div className="flex items-center justify-between border border-[#E95C2B] rounded-md py-10 md:p-3 bg-[#fdefea] hover:bg-[#fdefea] transition shadow-md cursor-pointer">
            <h3 className="text-lg font-bold text-[#E95C2B] flex-1 text-center">
              Refer a Friend
            </h3>
            <img
              src="/images/orange.svg"
              alt="Arrow"
              className="mr-4 w-4 h-4 md:w-3 md:h-3"
            />
          </div>
          <p className="text-black mt-4">
            Earn 25 points for each friend who signs up for the Loyalty Program!
          </p>
        </div>
      </div>
    </div>
  );
}
