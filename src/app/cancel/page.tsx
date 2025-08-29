// src/app/cancel/page.tsx
"use client";

import Link from "next/link";
import { FiXCircle, FiArrowLeft } from "react-icons/fi";

export default function CancelPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 px-6">


      {/* Cancel Card */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-12 max-w-xl text-center border border-slate-200 dark:border-slate-700">
        <FiXCircle className="mx-auto w-20 h-20 text-red-500 mb-6 animate-pulse" />
        <h1 className="text-4xl sm:text-3xl font-extrabold text-slate-800 dark:text-white mb-4">
          Payment Cancelled
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8">
          Looks like you didn’t complete your payment. No worries—you can try again anytime!
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-3xl font-semibold shadow-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300"
        >
          Return to Plans
          <FiArrowLeft className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
