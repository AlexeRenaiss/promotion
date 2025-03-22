"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MoreWayToEarn({ title }) {
  const quizCards = [
    {
      id: 1,
      image: "/images/earn1.png",
      title: "1 QUIZ: Play P&G Product Matchmaker",
    },
    {
      id: 2,
      image: "/images/earn2.png",
      title: "2 QUIZ: Play P&G Product Matchmaker",
    },
    {
      id: 3,
      image: "/images/earn3.png",
      title: "3 QUIZ: Play P&G Product Matchmaker",
    },
    { id: 4, image: "/images/earn1.png", title: "4 QUIZ: Food Quiz Challenge" },
    {
      id: 5,
      image: "/images/earn2.png",
      title: "5 QUIZ: Wellness Knowledge Finder",
    },
    {
      id: 6,
      image: "/images/earn3.png",
      title: "6 QUIZ: Health Products Quiz",
    },
    {
      id: 7,
      image: "/images/earn3.png",
      title: "7 QUIZ: Health Products Quiz",
    },
  ];

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3); // Default for desktop
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive card counts
  useEffect(() => {
    const updateItemsPerSlide = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        setItemsPerSlide(3); // Desktop (1280px and above)
        setIsMobile(false);
      } else if (screenWidth >= 1024) {
        setItemsPerSlide(2); // iPad Pro (1024px)
        setIsMobile(false);
      } else if (screenWidth >= 768) {
        setItemsPerSlide(2); // Tablet (768px - 1023px)
        setIsMobile(false);
      } else {
        setItemsPerSlide(1); // Mobile (below 768px)
        setIsMobile(true);
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(quizCards.length / itemsPerSlide);
  const lastSlideIndex = totalSlides - 1;

  const handleNext = () => {
    if (currentIndex < lastSlideIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const getVisibleCards = () => {
    if (isMobile) return quizCards;

    if (currentIndex === lastSlideIndex) {
      const remainingCards = quizCards.length - currentIndex * itemsPerSlide;
      const cardsFromEnd = quizCards.slice(currentIndex * itemsPerSlide);
      const cardsFromBeginning = quizCards.slice(
        0,
        itemsPerSlide - remainingCards
      );
      return [...cardsFromEnd, ...cardsFromBeginning];
    }

    return quizCards.slice(
      currentIndex * itemsPerSlide,
      (currentIndex + 1) * itemsPerSlide
    );
  };

  return (
    <div className="mx-auto px-3 mob:px-4 tab:px-6 py-12 mob:py-16 bg-white w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 mob:mb-8 text-black">
          <h2 className="text-xl mob:text-2xl mb-1 mob:mb-2 font-bold">
            {title}
          </h2>
          <p className="font-extralight">
            Earn points with each one of these quick quizzes.
          </p>
        </div>

        <div className="relative">
          <div
            className={`grid grid-cols-1 tab:grid-cols-2 smDesktop:grid-cols-3 gap-4 mob:gap-6 transition-all duration-500 ease-in-out`}
          >
            {getVisibleCards().map((card, index) => (
              <div
                key={card.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                  isTransitioning
                    ? "opacity-0 transform translate-x-6"
                    : "opacity-100 transform translate-x-0"
                } transition-all duration-300 ease-in-out`}
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
                  {card.title}
                </div>
              </div>
            ))}
          </div>

          {!isMobile && currentIndex > 0 && (
            <button
              onClick={handlePrevious}
              className="absolute left-2 smDesktop:-left-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 hidden tab:block smDesktop:block"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
          )}

          {!isMobile && currentIndex < lastSlideIndex && (
            <button
              onClick={handleNext}
              className="absolute right-2 smDesktop:-right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 hidden tab:block smDesktop:block"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
