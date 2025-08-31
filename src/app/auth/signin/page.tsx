"use client";

import { getProviders, signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";
import DarkVeil from "@/components/DarkVeil";
import { Playpen_Sans } from "next/font/google";

const playpen = Playpen_Sans({
  subsets: ['latin'],
  weight: ['400','600','800']
})

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

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="h-12 w-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (status === "authenticated") return null;

  const handleSignIn = (providerId: string) => {
    signIn(providerId, { callbackUrl: "/dashboard" });
  };

  const logos: Record<string, string> = {
    google: "https://www.svgrepo.com/show/355037/google.svg",
    github: "https://www.svgrepo.com/show/341847/github.svg",
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 🔥 Full-screen background */}
      <div className="absolute inset-0">
        <DarkVeil />
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid  gap-12 items-center">
          {/* Sign In Form */}
          <div
            className="order-1 lg:order-2 backdrop-blur-md  
        w-full max-w-md mx-auto
        p-6 sm:p-8 lg:p-10 
        rounded-3xl shadow-2xl border border-white/20 dark:border-slate-700/20"
          >
            <div className="text-center mb-8">
              <h1 className={`${playpen.className}
              text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4`}>
                Welcome Back
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300">
                Sign in to continue your growth journey
              </p>
            </div>

            {/* OAuth Buttons */}
            <div className="space-y-4">
              {providers &&
                Object.values(providers).map((provider: any) => {
                  return (
                    <button
                      key={provider.name}
                      onClick={() => handleSignIn(provider.id)}
                      className="group w-full py-3 sm:py-4 flex items-center justify-center gap-3  
                  backdrop-blur-sm bg-indigo-800/40
                  text-black dark:text-white font-semibold rounded-2xl shadow-lg 
                  hover:shadow-xl hover:-translate-y-1 transition-all duration-300 
                  border border-gray-200/30 dark:border-slate-700/40
                  hover:bg-indigo-800
                  "
                    >
                      <img
                        src={logos[provider.id]}
                        alt={`${provider.name} logo`}
                        className="w-6 h-6"
                      />
                      <span>Continue with {provider.name}</span>
                      <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  );
                })}
            </div>

            <div className="mt-6 text-center">
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
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
        </div>
      </div>
    </div>
  );
}
