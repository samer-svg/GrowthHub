"use client";

import { getProviders, signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FiArrowRight, FiShield, FiZap, FiTrendingUp } from "react-icons/fi";

export default function SignInPage() {
  const [providers, setProviders] = useState<any>(null);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    getProviders().then((data) => setProviders(data));
  }, []);

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [status, router]);

  // while checking session → prevent flash
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="h-12 w-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (status === "authenticated") {
    // don't render sign-in UI if redirect hasn't happened yet
    return null;
  }

  const handleSignIn = (providerId: string) => {
    signIn(providerId, { callbackUrl: "/dashboard" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-tr from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-emerald-400/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_10s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-[pulse_12s_ease-in-out_infinite]"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Sign In Form */}
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-white/20 dark:border-slate-700/20">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
                Welcome Back
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Sign in to continue your growth journey
              </p>
            </div>

            {/* OAuth Buttons */}
            <div className="space-y-4">
              {providers &&
                Object.values(providers).map((provider: any) => {
                  if (provider.id === "email") return null;
                  return (
                    <button
                      key={provider.name}
                      onClick={() => handleSignIn(provider.id)}
                      className="group w-full py-4 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <span>Continue with {provider.name}</span>
                      <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  );
                })}
            </div>

            <div className="mt-8 text-center">
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                By signing in, you agree to our{" "}
                <span className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                  Terms
                </span>{" "}
                and{" "}
                <span className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                  Privacy Policy
                </span>
                .
              </p>
            </div>
          </div>

          {/* Right Side - Features & Benefits */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
                Ready to Transform Your Life?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                Join thousands of users who are already achieving their goals
                and building better habits with GrowthHub.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FiShield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                    Secure & Private
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Your data is encrypted and protected with enterprise-grade
                    security.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FiZap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                    AI-Powered Insights
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Get personalized recommendations and insights to accelerate
                    your growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FiTrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                    Track Progress
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Visualize your journey with beautiful charts and progress
                    tracking.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 mb-6 lg:mb-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  10K+
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Active Users
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  95%
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Success Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  24/7
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
