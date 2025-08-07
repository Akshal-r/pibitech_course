"use client";

import {
  Briefcase,
  Calendar,
  CheckCircle,
  Clock,
  Monitor,
  Users,
  Target,
  Star,
  TrendingUp,
  Zap,
  Trophy,
} from "lucide-react";

export default function DetailsSection() {
  const differentiators = [
    {
      icon: <Target className="w-8 h-8 text-blue-600 mb-3" />,
      title: "You ship a real product",
      description:
        "A full-stack, AI-powered app that's demoable, fundable, and hosted.",
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500 mb-3" />,
      title: "You own your IP",
      description: "Everything you build belongs to you. No catch.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500 mb-3" />,
      title: "You pitch to VCs",
      description:
        "Build a real pitch deck, get feedback, and access our investor network.",
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500 mb-3" />,
      title: "Your product goes live",
      description:
        "We provide hosting and GTM support to make sure it doesn't sit in a folder.",
    },
    {
      icon: <Trophy className="w-8 h-8 text-indigo-500 mb-3" />,
      title: "You leave with proof",
      description:
        "Internship certificate, GitHub portfolio, and a working product.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-red-500 mb-3" />,
      title: "You get placement support",
      description:
        "We help you land roles in top product companies — not just list job boards.",
    },
  ];

  const infoCards = [
    {
      icon: <Clock className="h-8 w-8 text-blue-900 mx-auto mb-3" />,
      label: "Duration",
      value: "60 hours",
    },
    {
      icon: <Calendar className="h-8 w-8 text-blue-900 mx-auto mb-3" />,
      label: "Timeline",
      value: "45 days",
    },
    {
      icon: <Monitor className="h-8 w-8 text-blue-900 mx-auto mb-3" />,
      label: "Format",
      value: "Online (Live + async)",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-900 mx-auto mb-3" />,
      label: "Batches",
      value: "Weekday & Weekend",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Makes This Program Different
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white dark:bg-zinc-900 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-center">
                  {item.icon}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" id="details">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Program Details
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {infoCards.map((card, index) => (
              <div
                key={index}
                className="p-6 text-center rounded-xl bg-white dark:bg-zinc-900 border-2 border-transparent hover:shadow-lg transition-all duration-300"
              >
                {card.icon}
                <h3 className="text-lg font-semibold">{card.label}</h3>
                <p className="text-muted-foreground mt-1">{card.value}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-white dark:bg-zinc-900 shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                Level & Prerequisites
              </h3>
              <p className="text-muted-foreground">
                <strong>Intermediate</strong> – Ideal for students, career
                switchers, and early-career developers.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-zinc-900 shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Trophy className="h-5 w-5 text-primary mr-2" />
                Outcome
              </h3>
              <p className="text-muted-foreground">
                A launched AI product, internship-grade experience, pitch
                readiness, and job-focused skills.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
