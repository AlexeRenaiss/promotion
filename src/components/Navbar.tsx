"use client";

import Link from "next/link";
import { UserCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();
  const profileDropdownRef = useRef(null);
  const [user, setUser] = useState(false);

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

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <nav className="bg-white border-b border-gray-100 fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0">
        <div className="flex justify-between h-16 items-center">
          {/* Mobile menu button */}
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

          {/* Logo */}
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

          {/* User Profile / Login Button */}
          {user ? (
            <div className="relative" ref={profileDropdownRef}>
              <div
                className="flex flex-col  sm:flex-row items-center space-x-0 sm:space-x-2 space-y-1 sm:space-y-0 font-medium cursor-pointer"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <UserCircle className="h-6 w-8 text-black sm:pr-0 text-center" />
                <span className="text-[#191F52] text-[10px] sm:text-sm text-center">
                  John
                </span>
              </div>

              {isProfileOpen && (
                <div className="absolute min-w-56 -top-7 right-0 mt-2 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center justify-end">
                      <div className="text-center text-blue font-semibold mt-1">
                        John
                      </div>
                      <UserCircle className="h-6 w-8 text-black pr-1 sm:pr-0" />
                    </div>
                  </div>
                  <Link
                    href="/account"
                    className="block px-4 py-3 text-[#171D52] hover:bg-gray-50 font-medium"
                  >
                    My Account
                  </Link>
                  <div
                    className="block px-4 py-1 text-[#171D52] hover:bg-gray-50 font-medium cursor-pointer"
                    onClick={handleLogout}
                  >
                    Sign Out
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="sm:block hidden">
              <Button
                className="text-white rounded-full px-4 md:px-16 font-bold"
                onClick={() => (window.location.href = "/login")}
              >
                Login
              </Button>
            </div>
          )}

          {/* Mobile View: Show UserCircle Icon Instead of Login Button */}
          {!user && (
            <div
              className="block sm:hidden text-center"
              onClick={() => (window.location.href = "/login")}
            >
              <UserCircle className="h-6 w-8 text-gray-700" />
              <span className="text-black text-[10px] sm:text-sm">Login</span>
            </div>
          )}
        </div>
        {/* Mobile Menu Items */}
        {isOpen && (
          <div className="sm:hidden bg-white shadow-md rounded-lg mt-2 p-4">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-gray-900"
            >
              Rewards
            </Link>
            <Link
              href="/quiz"
              className="block py-2 text-gray-700 hover:text-gray-900"
            >
              Quiz
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-700 hover:text-gray-900"
            >
              Contact us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
