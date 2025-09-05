"use client";

import DarkModeToggle from "@/components/DarkModeToggle";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FiTarget, FiBookOpen, FiTrendingUp, FiCreditCard } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: "DSA",
      href: "/dashboard/dsa",
      icon: <FiBookOpen className="w-4 h-4" />,
      description: "Master Data Structures and Algorithms"
    },
    {
      name: "Projects",
      href: "/dashboard/project-ideas",
      icon: <FiTarget className="w-4 h-4" />,
      description: "Build amazing projects"
    },
    {
      name: "Courses",
      href: "/dashboard/courses",
      icon: <FiTrendingUp className="w-4 h-4" />,
      description: "Learn new technologies"
    },
    {
      name: "Pricing",
      href: "/dashboard/pricing",
      icon: <FiCreditCard className="w-4 h-4" />,
      description: "Upgrade your plan"
    }
  ];

  return (
    <nav className="relative bg-white/80 dark:bg-gray-950  backdrop-blur-md shadow-lg border-b border-2 border-white/40 dark:border-slate-700/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/dashboard" className="group">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
              GrowthHub
            </h1>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  {item.name}
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-slate-700 dark:text-slate-300" />
              ) : (
                <Menu className="h-6 w-6 text-slate-700 dark:text-slate-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 shadow-xl"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 p-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{item.description}</div>
                </div>
              </Link>
            ))}

            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
              <Button 
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 border-0 shadow-lg hover:shadow-xl transition-all duration-300" 
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Logout
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
