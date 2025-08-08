"use client";

import { Download } from "lucide-react";

const CtaSection = ({ onContactOpen, onBrochureOpen }) => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-20 text-center px-4 rounded-lg">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Turn your idea into a launched AI product
      </h2>
      <p className="text-lg md:text-xl mb-8">
        And turn your skill set into a career.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={onContactOpen}
          className="bg-white text-blue-900 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition"
        >
          Join the Course
        </button>
        <button
          onClick={onBrochureOpen}
          className="flex items-center justify-center border border-white text-white text-lg px-6 py-3 rounded-md hover:bg-white hover:text-blue-900 transition"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Brochure
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
