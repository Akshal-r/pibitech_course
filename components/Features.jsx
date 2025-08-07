"use client";

import React from "react";
import {
  Rocket,
  Users,
  Award,
  Github,
  Briefcase,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: <Rocket className="w-6 h-6 text-white" />,
    title: "Launch your own AI-powered product",
    description:
      "Not a simulation or group project. Your idea, built from scratch and deployed live.",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Pitch to real VCs with mentorship",
    description:
      "Refine your deck, sharpen your story, and meet actual investors.",
  },
  {
    icon: <Award className="w-6 h-6 text-white" />,
    title: "Get certified as an AI Product Developer",
    description: "With internship-grade experience, not just theory.",
  },
  {
    icon: <Github className="w-6 h-6 text-white" />,
    title: "Build a GitHub-backed portfolio",
    description:
      "Show off your code, ship a working demo, and prove your skills.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-white" />,
    title: "Unlock placement support",
    description:
      "With resume reviews, mock interviews, and referrals to top product companies.",
  },
  {
    icon: <BadgeCheck className="w-6 h-6 text-white" />,
    title: "Stand out in job applications",
    description:
      "Showcase your product-building skills with a real deployed project.",
  },
];

export default function Features() {
  return (
    <section id="Features" className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-zinc-900 dark:text-white">
          What You Actually Get
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mt-2 mb-10 text-lg">
          Real outcomes, not just certificates
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-6 shadow-md transform transition duration-300 hover:shadow-xl hover:scale-[1.03]"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
