"use client";

import { useSession } from "next-auth/react";
import SignOutButton from "./SignOutButton";
import { useState } from "react";
import Link from "next/link";

export default function Topbar() {
  const { data: session } = useSession();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-sidebar right-0 z-30 h-header bg-white/70 dark:bg-[#212224]/70 backdrop-blur shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center flex-1">
          <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Hostel Management System
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-6">
          {/* Notifications */}
          <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
            <i className="ti ti-bell text-xl"></i>
          </button>

          {/* Settings */}
          <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
            <i className="ti ti-settings text-xl"></i>
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-semibold">
                {session?.user?.name
                  ?.split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase() || "U"}
              </div>
              <div className="hidden sm:flex flex-col items-start">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
                  {session?.user?.name || session?.user?.email}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {session?.user?.role}
                </p>
              </div>
              <i className="ti ti-chevron-down text-gray-600 dark:text-gray-400"></i>
            </button>

            {/* Dropdown Menu */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#2b2c2f] rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <Link
                  href="/profile"
                  className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-[#282a2c] rounded-t-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  onClick={() => setIsProfileOpen(false)}
                >
                  <i className="ti ti-user mr-2"></i>
                  Profile
                </Link>
                <Link
                  href="/settings"
                  className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-[#282a2c] text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  onClick={() => setIsProfileOpen(false)}
                >
                  <i className="ti ti-settings mr-2"></i>
                  Settings
                </Link>
                <hr className="border-gray-200 dark:border-gray-700" />
                <div className="px-4 py-3">
                  <SignOutButton />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
