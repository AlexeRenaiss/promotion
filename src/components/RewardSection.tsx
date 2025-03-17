"use client";
import Image from "next/image";
import CustomButton from "./Button";
import React from "react";

export default function RewardSection() {
  const [showAll, setShowAll] = React.useState(false);
  return (
    <div className="max-w-6xl mx-auto px-3 mob:px-4 tab:px-6 py-8 mob:py-12 tab:my-8">
      {/* Title Section */}
      <div className="text-center text-black mb-6 mob:mb-8">
        <h2 className="text-xl mob:text-2xl font-bold mb-1 mob:mb-2">
          Rewards
        </h2>
        <p className="font-light">
          Redeem the points you've earned for rewards you'll love.
        </p>
      </div>

      {/* Rewards Grid */}
      <div className="grid grid-cols-1 mob:grid-cols-1 tab:grid-cols-2 smDesktop:grid-cols-3 gap-4 mob:gap-6">
        {/* Reward Card 1 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-white relative m-2 rounded-lg overflow-hidden">
            <Image
              src="/images/reward1.png"
              alt="Health Care Favorites Bundle"
              width={384}
              height={192}
              className="w-full object-contain rounded-lg"
            />
          </div>
          <div className="p-4 text-center font-bold text-black">
            <div className="mb-1">25 Points</div>
            <div>Monthly Sweepstakes</div>
          </div>
        </div>

        {/* Reward Card 2 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-white relative m-2 rounded-lg overflow-hidden">
            <Image
              src="/images/reward2.png"
              alt="Health Care Favorites Bundle"
              width={384}
              height={192}
              className="w-full object-contain rounded-lg"
            />
          </div>
          <div className="p-4 text-center font-bold text-black">
            <div className="mb-1">25 Points</div>
            <div>Family Care Favorites Bundle</div>
          </div>
        </div>

        {/* Reward Card 3 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-white relative m-2 rounded-lg overflow-hidden">
            <Image
              src="/images/reward3.png"
              alt="Health Care Favorites Bundle"
              width={384}
              height={192}
              className="w-full object-contain rounded-lg"
            />
          </div>
          <div className="p-4 text-center font-bold text-black">
            <div className="mb-1">25 Points</div>
            <div>Family Care Favorites Bundle</div>
          </div>
        </div>

        {showAll && (
          <>
            {/* Additional Reward Cards (if showAll is true) */}
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="bg-white relative m-2 rounded-lg overflow-hidden">
                  <Image
                    src={`/images/reward${(index % 3) + 1}.png`}
                    alt="Reward Image"
                    width={384}
                    height={192}
                    className="w-full object-contain rounded-lg"
                  />
                </div>
                <div className="p-4 text-center font-bold text-black">
                  <div className="mb-1">25 Points</div>
                  <div>
                    {index % 2 === 0
                      ? "Monthly Sweepstakes"
                      : "Family Care Favorites Bundle"}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {/* View All Button */}
      <div className="text-center mt-6 mob:mt-8">
        <CustomButton onClick={() => setShowAll(!showAll)} title="VIEW ALL" />
      </div>
    </div>
  );
}
