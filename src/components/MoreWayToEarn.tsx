"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MoreWayToEarn({ title }) {
  // Sample data for quiz cards
  const quizCards = [
    {
      id: 1,
      image: "/images/earn1.png",
      title: "QUIZ: Play P&G Product Matchmaker",
    },
    {
      id: 2,
      image: "/images/earn2.png",
      title: "QUIZ: Play P&G Product Matchmaker",
    },
    {
      id: 3,
      image: "/images/earn3.png",
      title: "QUIZ: Play P&G Product Matchmaker",
    },
    { id: 4, image: "/images/earn1.png", title: "QUIZ: Food Quiz Challenge" },
    {
      id: 5,
      image: "/images/earn2.png",
      title: "QUIZ: Wellness Knowledge Finder",
    },
    { id: 6, image: "/images/earn3.png", title: "QUIZ: Health Products Quiz" },
  ];

  // State for the current active index
  const [currentIndex, setCurrentIndex] = useState(0);
  // State for transition effect
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to handle next image
  const handleNext = () => {
    if (currentIndex < quizCards.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  // Function to handle previous image
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  // Calculate visible cards based on screen size
  const getVisibleCards = () => {
    // For mobile: just the current card
    // For md screens and up: current card and two more if available
    const cards = [];
    cards.push(quizCards[currentIndex]);

    // Only add additional cards for medium screens and up
    if (currentIndex + 1 < quizCards.length) {
      cards.push(quizCards[currentIndex + 1]);
    }
    if (currentIndex + 2 < quizCards.length) {
      cards.push(quizCards[currentIndex + 2]);
    }

    return cards;
  };

  return (
    <div className="mx-auto px-3 mob:px-4 tab:px-6 py-12 mob:py-16 bg-white w-full">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-6 mob:mb-8 text-black">
          <h2 className="text-xl mob:text-2xl mb-1 mob:mb-2 font-bold">
            {title}
          </h2>
          <p className="font-extralight">
            Earn points with each one of these quick quizzes.
          </p>
        </div>

        {/* Quiz Cards Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 mob:grid-cols-1 tab:grid-cols-2 smDesktop:grid-cols-3 gap-4 mob:gap-6 transition-all duration-500 ease-in-out">
            {getVisibleCards().map((card, index) => (
              <div
                key={card.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden 
                ${
                  isTransitioning
                    ? "opacity-0 transform translate-x-6"
                    : "opacity-100 transform translate-x-0"
                }
                transition-all duration-300 ease-in-out`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-44 mob:h-56 bg-blue-500 relative m-2 rounded-lg overflow-hidden">
                  <Image
                    src={card.image}
                    alt="Quiz Image"
                    width={384}
                    height={192}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="p-4 text-center font-bold text-[#171D52]">
                  <div>{card.title}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Only show on tablets and larger screens */}
          {currentIndex > 0 && (
            <button
              onClick={handlePrevious}
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 hidden tab:block"
              aria-label="Previous image"
              disabled={isTransitioning}
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
          )}

          {currentIndex < quizCards.length - 1 && (
            <button
              onClick={handleNext}
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 hidden tab:block"
              aria-label="Next image"
              disabled={isTransitioning}
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
