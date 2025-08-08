"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Curriculum from "@/components/Curriculam";
import Details from "@/components/Details";
import ContactModel from "@/components/ContactModel";
import BrochureForm from "@/components/BrochureForm";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  const [isContactOpen, setContactOpen] = useState(false);
  const [isBrochureOpen, setBrochureOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <HeroSection
          onContactOpen={() => setContactOpen(true)}
          onBrochureOpen={() => setBrochureOpen(true)}
        />
        <Features />
        <Curriculum />
        <Details />

        <ContactModel
          isOpen={isContactOpen}
          onClose={() => setContactOpen(false)}
        />
        <BrochureForm
          isOpen={isBrochureOpen}
          onClose={() => setBrochureOpen(false)}
        />
        <CtaSection />
      </main>
    </div>
  );
}
