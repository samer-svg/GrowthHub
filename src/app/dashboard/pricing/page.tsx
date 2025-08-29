"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FiCheck } from "react-icons/fi";
import { motion } from "framer-motion";

export default function DashboardPricingPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userPlan, setUserPlan] = useState<string | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/auth/signin");
    if (status === "authenticated") {
      fetch("/api/subscription")
        .then((res) => res.json())
        .then((data) => setUserPlan(data?.plan || "free"));
    }
  }, [status, router]);

  const plans = [
    {
      id: "free",
      name: "Free",
      price: "$0",
      features: ["Limited access", "Basic tracking"],
    },
    {
      id: "pro",
      name: "Pro",
      price: "$9 / mo",
      features: ["AI guidance", "Skill tracking", "Learning paths"],
    },
    {
      id: "premium",
      name: "Premium",
      price: "$19 / mo",
      features: [
        "Everything in Pro",
        "Advanced AI insights",
        "Premium support",
        "Early access to features",
      ],
    },
  ];

  const handleCheckout = async (planId: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify({ plan: planId }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      window.location.href = data.url;
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  if (status === "loading" || !userPlan) {
    return (
      <div className="min-h-[89vh] flex items-center justify-center dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
        <div className="text-center">
          <div className="w-16 h-16 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8  dark:from-slate-900 ">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white"
      >
        Upgrade Your Plan
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => {
          const isCurrent = userPlan === plan.id;

          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`group relative flex flex-col justify-between h-full dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 border-2
    ${plan.id === 'pro' ? 'hover:border-blue-500' : ''}
    ${plan.id === 'premium' ? 'hover:border-yellow-500' : ''}
    ${plan.id === 'free' ? 'hover:border-white dark:hover:border-white/30' : ''}
    transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl `}
            >
              <div>
                {/* Plan Name */}
                <h2
                  className={`text-2xl font-bold mb-4 ${
                    plan.id === "pro"
                      ? "text-blue-500"
                      : plan.id === "premium"
                        ? "text-amber-500"
                        : "text-slate-800 dark:text-white"
                  }`}
                >
                  {plan.name}
                </h2>

                {/* First feature */}
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  {plan.features[0]}
                </p>

                {/* Price */}
                <div className="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">
                  {plan.price}
                </div>

                {/* Feature list */}
                <ul className="space-y-2 mb-6 text-slate-600 dark:text-slate-300">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <FiCheck className="text-green-500" /> {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button at the bottom */}
              <div>
                <button
                  disabled={isCurrent || loading}
                  onClick={() => handleCheckout(plan.id)}
                  className={`w-full py-3 rounded-xl font-semibold shadow-md text-white transition-all $ ${
                    isCurrent
                      ? "bg-gray-400 cursor-none"
                      : plan.name === "Premium"
                        ? "bg-yellow-600"
                        : "bg-blue-600"
                  } ${loading ? "cursor-wait bg-gray-500" : ""} ${!loading && !isCurrent ? "hover:opacity-75" : ""} cursor-pointer`}
                >
                  {isCurrent
                    ? "Current Plan"
                    : loading
                      ? "Redirecting..."
                      : "Upgrade"}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
