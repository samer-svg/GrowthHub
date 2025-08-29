"use client";

import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { DarkModeProvider } from "../context/DarkModeContext";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar on top */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 bg-gray-50 dark:bg-gray-900 pb-3">{children}</main>
    </div>
  );
}
