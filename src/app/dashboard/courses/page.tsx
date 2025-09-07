"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiCode,
  FiTrendingUp,
  FiAward,
  FiClock,
  FiUsers,
  FiStar,
} from "react-icons/fi";

function CoursesPage() {
  const courses = [
    {
      title: "React Mastery",
      description:
        "Learn React from basics to advanced concepts including hooks, context, and performance optimization.",
      level: "Beginner",
      duration: "8 weeks",
      students: "2.4k",
      rating: 4.9,
      icon: <FiCode className="w-8 h-8 text-blue-500" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-500/20 to-blue-600/20",
      border: "border-blue-500/30",
      features: ["Modern Hooks", "Performance", "Testing", "Deployment"],
    },
    {
      title: "Next.js Deep Dive",
      description:
        "Master Next.js framework and its features including App Router, Server Components, and API routes.",
      level: "Advanced",
      duration: "6 weeks",
      students: "1.8k",
      rating: 4.8,
      icon: <FiTrendingUp className="w-8 h-8 text-emerald-500" />,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "from-emerald-500/20 to-emerald-600/20",
      border: "border-emerald-500/30",
      features: [
        "App Router",
        "Server Components",
        "API Routes",
        "Optimization",
      ],
    },
    {
      title: "TypeScript Fundamentals",
      description:
        "Type-safe JavaScript development with advanced type system, generics, and best practices.",
      level: "Beginner",
      duration: "4 weeks",
      students: "3.1k",
      rating: 4.7,
      icon: <FiBookOpen className="w-8 h-8 text-purple-500" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-500/20 to-purple-600/20",
      border: "border-purple-500/30",
      features: ["Type System", "Generics", "Advanced Types", "Best Practices"],
    },
    {
      title: "Node.js Backend",
      description:
        "Build scalable backend services with Node.js, Express, and modern JavaScript practices.",
      level: "Intermediate",
      duration: "7 weeks",
      students: "1.5k",
      rating: 4.6,
      icon: <FiAward className="w-8 h-8 text-amber-500" />,
      color: "from-amber-500 to-amber-600",
      bgColor: "from-amber-500/20 to-amber-600/20",
      border: "border-amber-500/30",
      features: ["Express.js", "Authentication", "Database", "Deployment"],
    },
    {
      title: "Database Design",
      description:
        "Master database design principles, SQL optimization, and NoSQL solutions for modern applications.",
      level: "Intermediate",
      duration: "5 weeks",
      students: "1.2k",
      rating: 4.8,
      icon: <FiStar className="w-8 h-8 text-pink-500" />,
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-500/20 to-pink-600/20",
      border: "border-pink-500/30",
      features: ["SQL Mastery", "NoSQL", "Optimization", "Scaling"],
    },
    {
      title: "DevOps Essentials",
      description:
        "Learn CI/CD, Docker, Kubernetes, and cloud deployment strategies for modern applications.",
      level: "Advanced",
      duration: "6 weeks",
      students: "900",
      rating: 4.9,
      icon: <FiTrendingUp className="w-8 h-8 text-teal-500" />,
      color: "from-teal-500 to-teal-600",
      bgColor: "from-teal-500/20 to-teal-600/20",
      border: "border-teal-500/30",
      features: ["Docker", "Kubernetes", "CI/CD", "Cloud"],
    },
  ];

  return (
    <div className="min-h-[89vh] py-16 px-6 dark:from-slate-900  relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
            Learning Courses{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              📚
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Master the latest technologies and frameworks with our
            comprehensive, hands-on courses designed for real-world success.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 border ${course.border} hover:border-white/40 dark:hover:border-slate-600/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-slate-900/10 dark:hover:shadow-slate-900/30`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${course.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {course.icon}
              </div>

              <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {course.title}
              </h2>

              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {course.description}
              </p>

              {/* Course Meta */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <FiClock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <FiUsers className="w-4 h-4" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <FiStar className="w-4 h-4 text-amber-500" />
                  <span>{course.rating} rating</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <div className="text-sm font-medium text-slate-700 dark:text-slate-200 mb-3">
                  Key Topics:
                </div>
                <div className="flex flex-wrap gap-2">
                  {course.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Level Badge */}
              <div className="flex items-end justify-between ">
                <span
                  className={`px-2 py-1 bg-gradient-to-r ${course.color} text-white text-xs font-medium rounded-full`}
                >
                  {course.level}
                </span>
                <button className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-300 text-sm font-medium">
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 1, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-slate-700/20">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              🎯 Ready to Start Learning?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Choose your path and start building the skills that will
              accelerate your career. All courses include hands-on projects and
              real-world applications.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-semibold">
              Explore All Courses
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CoursesPage;
