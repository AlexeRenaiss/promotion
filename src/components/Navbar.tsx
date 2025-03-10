"use client";

import Link from "next/link";
import { UserCircle, User } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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

          {/* User Profile - show on both mobile and desktop, but align differently */}
          <div className="flex items-center space-x-2 font-medium cursor-pointer">
            <span className="hidden sm:inline text-gray-700">John</span>
            <User className="h-6 w-8 text-black pr-1 block sm:hidden" />
            <UserCircle className="h-6 w-8 text-black pr-1 hidden sm:block" />
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
          {/* <div className="px-4 py-2 flex items-center space-x-2">
            <UserCircle className="h-6 w-6 text-gray-600" />
            <span className="text-black">John</span>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
