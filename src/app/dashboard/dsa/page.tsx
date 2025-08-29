"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiTarget, FiBookOpen, FiTrendingUp, FiCode, FiCheckCircle, FiZap } from "react-icons/fi";

const steps = [
  {
    title: "1. Understand the Problem",
    description:
      "Read the problem carefully. Identify inputs, outputs, and constraints. Rephrase it in your own words to ensure clarity.",
    icon: <FiBookOpen className="w-6 h-6 text-blue-500" />,
    color: "from-blue-500/20 to-blue-600/20",
    border: "border-blue-500/30",
    hover: "hover:border-blue-400/50 hover:from-blue-500/30 hover:to-blue-600/30",
  },
  {
    title: "2. Work Through Examples",
    description:
      "Manually solve small test cases. This helps uncover hidden edge cases and clarifies the requirements step by step.",
    icon: <FiTarget className="w-6 h-6 text-emerald-500" />,
    color: "from-emerald-500/20 to-emerald-600/20",
    border: "border-emerald-500/30",
    hover: "hover:border-emerald-400/50 hover:from-emerald-500/30 hover:to-emerald-600/30",
  },
  {
    title: "3. Break Down the Problem",
    description:
      "Think of brute-force solutions first, then try to optimize. Ask yourself: what data structure fits best?",
    icon: <FiTrendingUp className="w-6 h-6 text-purple-500" />,
    color: "from-purple-500/20 to-purple-600/20",
    border: "border-purple-500/30",
    hover: "hover:border-purple-400/50 hover:from-purple-500/30 hover:to-purple-600/30",
  },
  {
    title: "4. Write the Pseudocode",
    description:
      "Outline your solution in plain steps before coding. This makes coding smoother and reduces bugs significantly.",
    icon: <FiCode className="w-6 h-6 text-amber-500" />,
    color: "from-amber-500/20 to-amber-600/20",
    border: "border-amber-500/30",
    hover: "hover:border-amber-400/50 hover:from-amber-500/30 hover:to-amber-600/30",
  },
  {
    title: "5. Implement & Test",
    description:
      "Translate pseudocode into code. Test with given inputs, your own examples, and edge cases thoroughly.",
    icon: <FiCheckCircle className="w-6 h-6 text-green-500" />,
    color: "from-green-500/20 to-green-600/20",
    border: "border-green-500/30",
    hover: "hover:border-green-400/50 hover:from-green-500/30 hover:to-green-600/30",
  },
  {
    title: "6. Analyze & Optimize",
    description:
      "Evaluate time & space complexity. If needed, refine the approach to handle large inputs efficiently.",
    icon: <FiZap className="w-6 h-6 text-pink-500" />,
    color: "from-pink-500/20 to-pink-600/20",
    border: "border-pink-500/30",
    hover: "hover:border-pink-400/50 hover:from-pink-500/30 hover:to-pink-600/30",
  },
];

export default function DSAStepsPage() {
  return (
    <div className="min-h-[89vh]   py-16 px-6 dark:bg-black relative overflow-hidden">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 dark:text-white mb-6">
            Master DSA Problem Solving{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              🚀
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Follow these 6 structured steps every time you solve a problem. Build your problem-solving muscle and become a coding champion.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 border ${step.border} ${step.hover} transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-slate-900/10 dark:hover:shadow-slate-900/30`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>
              <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {step.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Practice Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">
            Ready to Practice?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              href="https://leetcode.com"
              target="_blank"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src="https://leetcode.com/favicon-32x32.png"
                alt="LeetCode"
                className="w-6 h-6"
              />
              Practice on LeetCode
            </Link>

            <Link
              href="https://neetcode.io/practice"
              target="_blank"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-2xl shadow-lg hover:from-emerald-700 hover:to-teal-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src="https://neetcode.io/favicon.ico"
                alt="NeetCode"
                className="w-6 h-6"
              />
              NeetCode 75
            </Link>
          </div>
        </motion.div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-slate-700/20"
        >
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center">
            💡 Pro Tips for Success
          </h3>
          <div className="grid  md:grid-cols-2 gap-6 text-slate-600 dark:text-slate-300">
            <div className="flex items-start sm:items-center sm:justify-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p>Practice consistently - even 30 minutes daily makes a huge difference</p>
            </div>
            <div className="flex items-start sm:items-center sm:justify-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
              <p>Focus on understanding patterns rather than memorizing solutions</p>
            </div>
            <div className="flex items-start sm:items-center sm:justify-center gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <p>Review your solutions and learn from mistakes</p>
            </div>
            <div className="flex items-start sm:items-center sm:justify-center gap-3">
              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
              <p>Join study groups and discuss problems with peers</p>
            </div>
          </div>
        </motion.div>
      </div>
  );
}
