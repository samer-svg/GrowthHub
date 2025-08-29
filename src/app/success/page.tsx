// src/app/success/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";

export default function SuccessPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDashboardRedirect = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 1000); // Optional small delay to show spinner
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  dark:from-slate-900 px-6">

      {/* Success Card */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-12 max-w-xl text-center border border-slate-200 dark:border-slate-700">
        <FiCheckCircle className="mx-auto w-20 h-20 text-emerald-500 mb-6 animate-bounce" />
        <h1 className="text-4xl sm:text-3xl font-extrabold text-slate-800 dark:text-white mb-4">
          Payment Successful!
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8">
          Welcome to <span className="font-bold text-blue-600 dark:text-blue-400">GrowthHub Pro</span> 🚀
        </p>
        <button
          onClick={handleDashboardRedirect}
          disabled={loading}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <svg
              className="w-5 h-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
          ) : (
            <>
              Go to Dashboard
              <FiArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
