"use client";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#f4f7fa] dark:bg-[#212224] min-h-screen">
      <Sidebar />
      <Topbar />

      {/* Main Content */}
      <main className="ml-sidebar mt-header min-h-screen">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
