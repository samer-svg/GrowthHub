"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FiBookOpen,
  FiBarChart2,
  FiCpu,
  FiArrowRight,
  FiCheck,
  FiStar,
} from "react-icons/fi";
import Particles from "../components/Particles";
import ScrambledText from "../components/ScrambledText";

export default function LandingPage() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async (plan: "pro" | "premium") => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Payment error");
    } finally {
      setLoading(false);
    }
  };

  const features = [
    {
      title: "Project Ideas",
      description:
        "Get AI-generated, skill-matched project ideas to sharpen your portfolio.",
      icon: <FiStar className="w-8 h-8 text-emerald-500" />,
      gradient: "from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-500/30",
      hover:
        "hover:border-emerald-400/50 hover:from-emerald-500/30 hover:to-teal-500/30",
    },
    {
      title: "Learning Paths",
      description:
        "Follow structured paths with curated courses, videos, and docs for any stack.",
      icon: <FiBookOpen className="w-8 h-8 text-blue-500" />,
      gradient: "from-blue-500/20 to-indigo-500/20",
      border: "border-blue-500/30",
      hover:
        "hover:border-blue-400/50 hover:from-blue-500/30 hover:to-indigo-500/30",
    },
    {
      title: "Skill Tracking",
      description:
        "Log your skills, set levels, and see where you need to improve most.",
      icon: <FiBarChart2 className="w-8 h-8 text-purple-500" />,
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
      hover:
        "hover:border-purple-400/50 hover:from-purple-500/30 hover:to-pink-500/30",
    },
    {
      title: "AI Guidance",
      description:
        "Get personalized recommendations powered by AI—courses, projects, and next steps.",
      icon: <FiCpu className="w-8 h-8 text-amber-500" />,
      gradient: "from-amber-500/20 to-orange-500/20",
      border: "border-amber-500/30",
      hover:
        "hover:border-amber-400/50 hover:from-amber-500/30 hover:to-orange-500/30",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-black ">
      {/* Particles as full-page background */}
      <div className="fixed bg-black inset-0  w-full h-full ">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.3}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center min-h-screen justify-center text-center py-24 sm:py-32 px-6 max-w-5xl mx-auto ">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-800 dark:text-white leading-tight">
          Unlock Your Potential with{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-rose-500 bg-clip-text text-transparent ">
            GrowthHub
          </span>
        </h2>

        <ScrambledText
          className="scrambled-text-demo text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl leading-relaxed font-mono font-semibold cursor-none "
          radius={100}
          duration={1.2}
          speed={0.5}
          scrambleChars={".:"}
        >
            A modern platform to track your goals, habits, and progress. grow
            smarter with AI-powered insights.
        </ScrambledText>

        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <Link
            href="/auth/signin"
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl hover:from-blue-700 hover:to-purple-700 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 font-bold text-lg hover:-translate-y-2 flex items-center gap-3"
          >
            Start Your Journey
            <FiArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </section>
      {/* Features Section */}
      <section id="features" className="relative py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h3 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
            Everything You Need to Succeed
          </h3>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Powerful tools designed to help you build better habits, achieve
            your goals, and track your personal growth journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`group bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 border ${feature.border} ${feature.hover} transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-slate-900/10 dark:hover:shadow-slate-900/30`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 sm:py-24 px-6   dark:to-slate-900 dark:from-slate-900 relative z-10 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="group">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                10K+
              </div>
              <div className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-medium">
                Active Users
              </div>
            </div>
            <div className="group">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                95%
              </div>
              <div className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-medium">
                Success Rate
              </div>
            </div>
            <div className="group">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-medium">
                Support
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 🚀 Pricing Section */}
      <section className="py-20 px-6 relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Choose Your Plan
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Flexible pricing to fit your journey. Upgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pro Plan */}
          <div className="group  rounded-3xl shadow-lg p-8 border-purple-400 border-2  hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between h-full">
            <div>
              <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                Pro
              </h4>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Perfect for individuals starting their journey.
              </p>
              <div className="text-4xl font-extrabold mb-6">
                $9
                <span className="text-lg font-medium text-slate-500">/mo</span>
              </div>
              <ul className="space-y-3 mb-6 text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <FiCheck className="text-green-500" /> Access to AI guidance
                </li>
                <li className="flex items-center gap-2">
                  <FiCheck className="text-green-500" /> Skill tracking
                </li>
                <li className="flex items-center gap-2">
                  <FiCheck className="text-green-500" /> Basic learning paths
                </li>
              </ul>
            </div>
            <button
              onClick={() => handleCheckout("pro")}
              disabled={loading}
              className="block w-full text-center py-3 px-6 bg-gradient-to-r from-purple-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:bg-blue-600 disabled:opacity-50"
            >
              {loading ? "Redirecting..." : "Get Pro"}
            </button>
          </div>

          {/* Premium Plan */}
          <div className="group  rounded-3xl shadow-lg p-8 border-2 border-emerald-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between h-full">
            <div>
              <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                Premium
              </h4>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Best for power users and professionals.
              </p>
              <div className="text-4xl font-extrabold mb-6">
                $19
                <span className="text-lg font-medium text-slate-500">/mo</span>
              </div>
              <ul className="space-y-3 mb-6 text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <FiCheck className="text-green-500" /> Everything in Pro
                </li>
                <li className="flex items-center gap-2">
                  <FiCheck className="text-green-500" /> Advanced AI insights
                </li>
                <li className="flex items-center gap-2">
                  <FiCheck className="text-green-500" /> Premium support
                </li>
                <li className="flex items-center gap-2">
                  <FiCheck className="text-green-500" /> Early access to
                  features
                </li>
              </ul>
            </div>
            <button
              onClick={() => handleCheckout("premium")}
              disabled={loading}
              className="block w-full text-center py-3 px-6 bg-gradient-to-l from-emerald-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all hover:bg-rose-900 disabled:opacity-50"
            >
              {loading ? "Redirecting..." : "Get Premium"}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-slate-900 dark:bg-slate-950 text-white py-12 sm:py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h4 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              GrowthHub
            </h4>
            <p className="text-slate-400 max-w-md mx-auto text-sm sm:text-base">
              Empowering individuals to reach their full potential through smart
              goal tracking and habit building.
            </p>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-500 text-sm sm:text-base">
              © {new Date().getFullYear()} GrowthHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
