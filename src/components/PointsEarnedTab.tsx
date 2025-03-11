"use client";
import React, { useState } from "react";
import Link from "next/link";

// Types for our component
interface PointEntry {
  id: string;
  date: string;
  action: string;
  status: "Approved" | "Pending" | "Declined";
  points: number;
}
interface RewardEntry {
  id: string;
  item: string;
  points: number;
  date?: string;
}

interface PointsTabProps {
  entries: PointEntry[];
}
interface RewardsTabProps {
  entries: RewardEntry[];
}

const PointsEarnedTab: React.FC<PointsTabProps> = ({ entries }) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-black mb-6 text-center">
        MY POINTS EARNED
      </h2>

      <div className="w-full pr-10">
        {/* Table headers */}
        <div className="grid grid-cols-3 mb-4">
          <div className="font-bold text-gray-800">ACTION</div>
          <div className="font-bold text-gray-800">STATUS</div>
          <div className="font-bold text-gray-800 text-right">POINTS</div>
        </div>

        {/* Table rows */}
        {entries.map((entry) => (
          <div key={entry.id} className="border-t border-gray-200 py-4">
            <div className="grid grid-cols-3">
              <div>
                <div className="text-black font-bold">{entry.date}</div>
                <div className="text-black">{entry.action}</div>
                <Link
                  href={`/details/${entry.id}`}
                  className="text-primary hover:text-primary font-bold"
                >
                  View Details
                </Link>
              </div>
              <div className="flex items-center">
                {entry.status === "Approved" && (
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-black">Approved</span>
                  </div>
                )}
                {entry.status === "Pending" && (
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                    <span>Pending</span>
                  </div>
                )}
                {entry.status === "Declined" && (
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                    <span>Declined</span>
                  </div>
                )}
              </div>
              <div className="text-right text-black">{entry.points}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const RewardsTab: React.FC<RewardsTabProps> = ({ entries }) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-black mb-6 text-center">
        MY REWARDS HISTORY
      </h2>

      <div className="w-full">
        {/* Table headers */}
        <div className="grid grid-cols-2 mb-4">
          <div className="font-bold text-gray-800">ITEM</div>
          <div className="font-bold text-gray-800 text-right">POINTS</div>
        </div>

        {/* Table rows */}
        {entries.length > 0 ? (
          entries.map((entry) => (
            <div key={entry.id} className="border-t border-gray-200 py-4">
              <div className="grid grid-cols-2">
                <div className="text-gray-700">{entry.item}</div>
                <div className="text-right">{entry.points}</div>
              </div>
            </div>
          ))
        ) : (
          <div className="border-t border-gray-200 py-8 text-center text-gray-500">
            No rewards history available
          </div>
        )}
      </div>
    </div>
  );
};

interface PointsRewardsDashboardProps {
  pointEntries: PointEntry[];
  rewardEntries: RewardEntry[];
}

const PointsRewardsDashboard: React.FC<PointsRewardsDashboardProps> = ({
  pointEntries,
  rewardEntries,
}) => {
  const [activeTab, setActiveTab] = useState<"points" | "rewards">("points");

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden my-20">
      {/* Tabs */}
      <div className="grid grid-cols-2">
        <button
          className={`py-4 text-center font-bold ${
            activeTab === "points"
              ? "text-primary border-b-2 border-primary"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("points")}
        >
          POINTS EARNED
        </button>
        <button
          className={`py-4 text-center font-bold ${
            activeTab === "rewards"
              ? "text-primary border-b-2 border-primary"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("rewards")}
        >
          REWARDS
        </button>
      </div>

      {/* Content area */}
      <div className="p-6">
        {activeTab === "points" ? (
          <PointsEarnedTab entries={pointEntries} />
        ) : (
          <RewardsTab entries={rewardEntries} />
        )}
      </div>
    </div>
  );
};

export default PointsRewardsDashboard;
