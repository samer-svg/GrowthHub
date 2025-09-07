"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  FiTarget,
  FiBookOpen,
  FiTrendingUp,
  FiBarChart,
  FiAward,
} from "react-icons/fi";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "loading" && status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  if (status === "loading")
    return (
      <div className="min-h-[89vh] flex items-center justify-center ...">
        {/* Loading spinner */}
      </div>
    );

  if (!session) return null;

  const statsCards = [
    {
      title: "Days Streak",
      value: 0,
      icon: <FiTrendingUp className="w-6 h-6 text-emerald-500" />,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "from-emerald-500/20 to-emerald-600/20",
      border: "border-emerald-800",
    },
    {
      title: "Goals Completed",
      value: 0,
      icon: <FiTarget className="w-6 h-6 text-blue-500" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-500/20 to-blue-600/20",
      border: "border-blue-800",
    },
    {
      title: "Habits Tracked",
      value: 0,
      icon: <FiBarChart className="w-6 h-6 text-purple-500" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-500/20 to-purple-600/20",
      border: "border-purple-800",
    },
  ];

  const quickActions = [
    {
      title: "DSA Practice",
      description: "Master Data Structures and Algorithms",
      icon: <FiBookOpen className="w-8 h-8 text-blue-500" />,
      href: "/dashboard/dsa",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-500/20 to-blue-600/20",
      border: "border-blue-500/30",
    },
    {
      title: "Project Ideas",
      description: "Build amazing projects to showcase your skills",
      icon: <FiTarget className="w-8 h-8 text-emerald-500" />,
      href: "/dashboard/project-ideas",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "from-emerald-500/20 to-emerald-600/20",
      border: "border-emerald-500/30",
    },
    {
      title: "Learning Courses",
      description: "Learn new technologies and frameworks",
      icon: <FiTrendingUp className="w-8 h-8 text-purple-500" />,
      href: "/dashboard/courses",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-500/20 to-purple-600/20",
      border: "border-purple-500/30",
    },
  ];

  return (
    <div className="min-h-[89vh]  py-16 px-6 dark:bg-black  relative overflow-hidden">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
          Welcome back,{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            {session.user?.name}
          </span>{" "}
          👋
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-mono">
          Ready to continue your growth journey? Let&apos;s make today count!
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 justify-center items-center "
      >
        {statsCards.map((stat, index) => (
          <div
            key={index}
            className={`bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-6 border-2  ${stat.border} hover:shadow-xl transition-all duration-300  hover:-translate-y-2`}
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 bg-gradient-to-br ${stat.bgColor} border-2 ${stat.border} rounded-2xl flex items-center justify-center`}
              >
                {stat.icon}
              </div>
              <div className="text-right">
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  {stat.title}
                </div>
                <div className="text-2xl font-bold text-slate-800 dark:text-white">
                  {stat.value}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2"></div>
          </div>
        ))}
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center">
          What would you like to work on today?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quickActions.map((action, index) => (
            <motion.a
              key={index}
              href={action.href}
              initial={{ opacity: 1, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 border ${action.border} hover:border-white/40 dark:hover:border-slate-600/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-slate-900/10 dark:hover:shadow-slate-900/30 cursor-pointer`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${action.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {action.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {action.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {action.description}
              </p>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Motivation Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border-2 dark:border-white/30 text-center"
      >
        <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <FiAward className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
          🎯 Today&apos;s Focus
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
          Success is not final, failure is not fatal: it is the courage to
          continue that counts.
          <br />
          <span className="font-medium text-slate-700 dark:text-slate-200">
            - Winston Churchill
          </span>
        </p>
      </motion.div>
    </div>
  );
}
