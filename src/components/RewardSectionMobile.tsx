"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Coffee, ShoppingBag, ShoppingCart } from "lucide-react";

const rewards = [
  {
    title: "Gift Card SIT Tested",
    amount: "$750",
    icon: Coffee,
    image: "/images/starbuck.png",
    brand: "Starbucks",
  },
  {
    title: "Gift Card SIT Tested",
    amount: "$10",
    icon: ShoppingBag,
    image: "/images/ultra.png",
    brand: "Ulta Beauty",
  },
  {
    title: "$5 Digital Rewards",
    amount: "$750",
    icon: ShoppingCart,
    image: "/images/grocery.png",
    brand: "P&G Products",
  },
  {
    title: "Gift Card SIT Tested",
    amount: "10 POINTS",
    icon: Gift,
    image: "/images/amazon.png",
    brand: "Amazon",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <Button
            variant="outline"
            className="rounded-full text-lg  bg-white text-black font-medium px-16 py-5  hover:bg-gray-100"
            style={{ borderColor: "#000000" }}
          >
            ALL REWARDS
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {rewards.map((reward, index) => (
            <Card
              key={index}
              className="overflow-hidden  hover:shadow-lg transition-shadow duration-300 rounded-2xl border-2"
              style={{ borderColor: "#CBCBCB" }}
            >
              <CardContent className="p-6 sm:p-4">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-32 h-32 sm:w-32 sm:h-32 md:w-40 md:h-40 flex items-center justify-center">
                    <img
                      src={reward.image}
                      alt={reward.brand}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-center pt-4">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 text-black">
                      {reward.amount}
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {reward.title}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
