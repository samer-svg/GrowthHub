"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiSmartphone,
  FiGlobe,
  FiTrendingUp,
  FiZap,
  FiStar,
  FiAward,
  FiBarChart,
  FiClock,
} from "react-icons/fi";

function ProjectIdeasPage() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Build a full-stack e-commerce solution with modern tech stack including user authentication, payment processing, and admin dashboard.",
      difficulty: "Advanced",
      duration: "8-12 weeks",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      icon: <FiGlobe className="w-8 h-8 text-blue-500" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-500/20 to-blue-600/20",
      border: "border-blue-500/30",
      features: ["User Auth", "Payment", "Admin Panel", "Responsive"],
    },
    {
      title: "Task Management App",
      description:
        "Create a productivity tool with real-time updates, team collaboration, and advanced project tracking capabilities.",
      difficulty: "Intermediate",
      duration: "6-8 weeks",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      icon: <FiTrendingUp className="w-8 h-8 text-emerald-500" />,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "from-emerald-500/20 to-emerald-600/20",
      border: "border-emerald-500/30",
      features: ["Real-time", "Team Sync", "Analytics", "Mobile"],
    },
    {
      title: "Social Media Dashboard",
      description:
        "Monitor and analyze social media metrics with beautiful charts, automated reporting, and cross-platform integration.",
      difficulty: "Advanced",
      duration: "10-14 weeks",
      tech: ["React", "Python", "Django", "Chart.js"],
      icon: <FiBarChart className="w-8 h-8 text-purple-500" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-500/20 to-purple-600/20",
      border: "border-purple-500/30",
      features: ["Analytics", "Automation", "Multi-platform", "Reports"],
    },
    {
      title: "AI Chat Application",
      description:
        "Develop an intelligent chatbot using modern AI APIs with natural language processing and context awareness.",
      difficulty: "Intermediate",
      duration: "4-6 weeks",
      tech: ["React", "OpenAI API", "Node.js", "MongoDB"],
      icon: <FiZap className="w-8 h-8 text-amber-500" />,
      color: "from-amber-500 to-amber-600",
      bgColor: "from-amber-500/20 to-amber-600/20",
      border: "border-amber-500/30",
      features: ["AI Chat", "Context", "History", "Customization"],
    },
    {
      title: "Fitness Tracking App",
      description:
        "Build a comprehensive fitness application with workout planning, progress tracking, and social features.",
      difficulty: "Intermediate",
      duration: "6-10 weeks",
      tech: ["React Native", "Firebase", "Redux", "Charts"],
      icon: <FiSmartphone className="w-8 h-8 text-pink-500" />,
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-500/20 to-pink-600/20",
      border: "border-pink-500/30",
      features: ["Workout Plans", "Progress", "Social", "Mobile"],
    },
    {
      title: "Weather Dashboard",
      description:
        "Create a beautiful weather application with location-based forecasts, historical data, and interactive maps.",
      difficulty: "Beginner",
      duration: "3-5 weeks",
      tech: ["React", "Weather API", "Leaflet", "Tailwind"],
      icon: <FiStar className="w-8 h-8 text-teal-500" />,
      color: "from-teal-500 to-teal-600",
      bgColor: "from-teal-500/20 to-teal-600/20",
      border: "border-teal-500/30",
      features: ["Forecasts", "Maps", "History", "Responsive"],
    },
  ];

  return (
    <div className="min-h-[89vh]  py-16 px-6 dark:from-black  relative overflow-hidden">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
          Project Ideas{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            💡
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-2">
          Transform your ideas into reality with these carefully curated project
          suggestions. Each project is designed to challenge your skills and
          build an impressive portfolio.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 1, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`group relative flex flex-col h-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 border ${project.border} hover:border-white/40 dark:hover:border-slate-600/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-slate-900/10 dark:hover:shadow-slate-900/30`}
          >
            <span
              className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs font-medium rounded-full shadow-md`}
            >
              {project.difficulty}
            </span>
            <div
              className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${project.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
            >
              {project.icon}
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-3 sm:mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {project.title}
            </h2>

            <p className="text-slate-600 dark:text-slate-300 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>

            {/* Project Meta */}
            <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <FiAward className="w-4 h-4" />
                <span>{project.difficulty}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <FiClock className="w-4 h-4" />
                <span>{project.duration}</span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-5 sm:mb-6">
              <div className="text-sm font-medium text-slate-700 dark:text-slate-200 mb-3">
                Tech Stack:
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-5 sm:mb-6">
              <div className="text-sm font-medium text-slate-700 dark:text-slate-200 mb-3">
                Key Features:
              </div>
              <div className="flex flex-wrap gap-2">
                {project.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-auto pt-4">
              <div className="flex gap-2 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-300 text-sm font-medium">
                  View Details
                </button>
                <button className="flex-1 sm:flex-none px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm font-medium">
                  Start Project
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-slate-700/20">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
            🚀 Ready to Build Something Amazing?
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
            Choose a project that excites you and start building your portfolio.
            Remember, the best projects come from solving real problems and
            learning along the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-semibold">
              Get Started Today
            </button>
            <button className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-2xl hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-semibold">
              Browse More Ideas
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectIdeasPage;
