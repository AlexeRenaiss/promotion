"use client";

import Link from "next/link";
import { UserCircle, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();
  const profileDropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <nav className="bg-white border-b border-gray-100 fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0">
        <div className="flex justify-between h-16 items-center">
          {/* Mobile menu button - moved to the left */}
          <div className="block sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Logo - centered on mobile */}
          <Link
            href="/"
            className="flex items-center space-x-2 mx-auto sm:mx-0"
          >
            <Image src="/logo.svg" alt="Logo" width={150} height={40} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8 font-medium">
            <Link
              href="/"
              className={`px-4 py-2 rounded-[10px] ${
                pathname === "/"
                  ? "bg-pink-50 text-primary"
                  : "text-gray-700 hover:text-gray-900"
              } transition-colors`}
            >
              Rewards
            </Link>
            <Link
              href="/quiz"
              className={`px-4 py-2 rounded-[10px] ${
                pathname === "/quiz"
                  ? "bg-pink-50 text-primary"
                  : "text-gray-700 hover:text-gray-900"
              } transition-colors`}
            >
              Quiz
            </Link>
            <Link
              href="/contact"
              className={`px-4 py-2 rounded-[10px] ${
                pathname === "/contact"
                  ? "bg-pink-50 text-primary"
                  : "text-gray-700 hover:text-gray-900"
              } transition-colors`}
            >
              Contact us
            </Link>
          </div>

          {/* User Profile with dropdown */}
          <div className="relative" ref={profileDropdownRef}>
            <div
              className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2 space-y-1 sm:space-y-0 font-medium cursor-pointer"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <UserCircle className="h-6 w-8 text-black pr-1 sm:pr-0" />
              <span className="text-black text-[10px] sm:text-sm">John</span>
            </div>

            {/* Profile Dropdown */}
            {isProfileOpen && (
              <div
                className="absolute  min-w-56 -top-7 right-0 mt-2 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100 transition-all duration-300 ease-in-out 
               animate-fadeIn "
              >
                <div className="px-4 py-3 border-b border-gray-100">
                  <div className="flex items-center justify-end ">
                    <div className="text-center text-black font-semibold text-lg mt-1">
                      John
                    </div>
                    <UserCircle className="h-6 w-8 text-black pr-1 sm:pr-0" />
                  </div>
                </div>
                <Link
                  href="/account"
                  className="block px-4 py-3 text-black hover:bg-gray-50 text-lg font-medium"
                >
                  My Account
                </Link>
                <div
                  className="block px-4 py-1 text-black hover:bg-gray-50 text-lg font-medium cursor-pointer"
                  onClick={handleLogout}
                >
                  Sign Out
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            href="/rewards"
            className={`block px-4 py-2 ${
              pathname === "/rewards"
                ? "bg-pink-50 text-pink-600"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            Rewards
          </Link>
          <Link
            href="/quiz"
            className={`block px-4 py-2 ${
              pathname === "/quiz"
                ? "bg-pink-50 text-pink-600"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            Quiz
          </Link>
          <Link
            href="/contact"
            className={`block px-4 py-2 ${
              pathname === "/contact"
                ? "bg-pink-50 text-pink-600"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
}
