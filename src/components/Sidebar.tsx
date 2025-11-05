"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function Sidebar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    {
      label: "Dashboard",
      href: "/",
      icon: "ti-dashboard",
      show: true,
    },
    {
      label: "Students",
      href: "/students",
      icon: "ti-users",
      show:
        session?.user?.role === "ADMIN" || session?.user?.role === "MANAGER",
    },
    {
      label: "Rooms",
      href: "/rooms",
      icon: "ti-home",
      show:
        session?.user?.role === "ADMIN" || session?.user?.role === "MANAGER",
    },
    {
      label: "Payments",
      href: "/payments",
      icon: "ti-coin",
      show:
        session?.user?.role === "ADMIN" || session?.user?.role === "MANAGER",
    },
    {
      label: "Maintenance",
      href: "/maintenance",
      icon: "ti-tools",
      show: true,
    },
    {
      label: "Reports",
      href: "/reports",
      icon: "ti-file-text",
      show: session?.user?.role === "ADMIN",
    },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 z-40 h-screen transition-all duration-300 ease-in-out bg-[#3f4d67] dark:bg-[#2b2c2f] shadow-lg ${
        isOpen ? "w-sidebar" : "w-20"
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <Link
            href="/"
            className={`flex items-center ${
              !isOpen && "justify-center w-full"
            }`}
          >
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              HM
            </div>
            {isOpen && (
              <span className="ml-3 text-white font-semibold text-base">
                HMS
              </span>
            )}
          </Link>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {menuItems
              .filter((item) => item.show)
              .map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 text-[#a9b7d0] hover:bg-white/10 dark:hover:bg-[#282a2c] ${
                      isOpen ? "justify-start" : "justify-center"
                    }`}
                    title={item.label}
                  >
                    <i className={`ti ${item.icon} text-lg`}></i>
                    {isOpen && (
                      <span className="ml-3 text-sm font-medium">
                        {item.label}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>

        {/* Toggle Button */}
        <div className="p-4 border-t border-white/10">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-center py-2 px-4 rounded-lg text-[#a9b7d0] hover:bg-white/10 dark:hover:bg-[#282a2c] transition-all duration-200"
          >
            <i
              className={`ti ${
                isOpen ? "ti-chevron-left" : "ti-chevron-right"
              }`}
            ></i>
          </button>
        </div>
      </div>
    </aside>
  );
}
