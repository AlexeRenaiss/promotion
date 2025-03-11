"use client";
import Image from "next/image";
import CustomButton from "./Button";
import React from "react";

export default function RewardSection() {
  const [showAll, setShowAll] = React.useState(false);
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:my-8 ">
      <div className="text-center text-black mb-8">
        <h2 className="text-2xl font-bold mb-2 ">Rewards</h2>
        <p className="font-light">
          Redeem the points you've earned for rewards you'll love.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Reward Card 1 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className=" bg-white relative m-2 rounded-lg overflow-hidden">
            <Image
              src="/images/reward1.png"
              alt="Health Care Favorites Bundle"
              width={384}
              height={192}
              className="w-full object-contain rounded-lg"
            />
          </div>
          <div className="p-4 text-center font-bold text-black">
            <div className="mb-1 ">25 Points</div>
            <div>Monthly Sweepstakes</div>
          </div>
        </div>

        {/* Reward Card 2 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className=" bg-white relative m-2 rounded-lg overflow-hidden">
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
              className="w-full object-contain rounded-lg "
            />
          </div>
          <div className="p-4 text-center font-bold text-black">
            <div className="mb-1">25 Points</div>
            <div>Family Care Favorites Bundle</div>
          </div>
        </div>
        {showAll && (
          <>
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
                <div className="mb-1 ">25 Points</div>
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
                <div className="mb-1 ">25 Points</div>
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
          </>
        )}
      </div>

      <div className="text-center mt-8">
        <CustomButton onClick={() => setShowAll(!showAll)} title="VIEW ALL" />
      </div>
    </div>
  );
}
