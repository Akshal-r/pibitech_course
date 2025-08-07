"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import HeroCarousel from "./HeroCarousel";

const HeroSection = ({ onContactOpen, onBrochureOpen }) => {
  return (
    <section
      id="hero"
      className="relative py-20 lg:py-32 overflow-hidden bg-accent"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100/20 to-transparent dark:from-gray-800/30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block rounded-full bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 dark:bg-blue-900 dark:text-blue-100">
                🚀 AI Product Developer Program
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Become an{" "}
                <span className="gradient-text text-blue-900 font-bold">
                  AI Product Developer
                </span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground">
                Build, Pitch & Launch Your Own AI App
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg text-gray-500">
                We don't make you learn AI; we make you build it.
                <br />
                In just 45 days, you'll design, build, deploy, and pitch your
                own AI product — and you'll own every line of it.
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="md"
                className="bg-primary text-white px-8 py-3 text-lg hover:bg-blue-900"
                onClick={onContactOpen}
              >
                Join the Course
              </Button>
              <Button
                size="md"
                variant="outline"
                className="text-lg px-5 py-2 hover:bg-blue-900"
                onClick={onBrochureOpen}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>

          <div>
            <HeroCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
