"use client";

import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="https://www.pibitech.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4"
        >
          <img
            src="/images/pibitechlogo.png"
            alt="PiBiTech Logo"
            className="h-12 w-12 object-contain"
          />
          <span className="text-xl font-bold text-blue-700 dark:text-blue-300">
            Pi Bi Technologies
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#Features" className="hover:text-blue-600">
            Features
          </a>
          <a href="#curriculum" className="hover:text-blue-600">
            Curriculum
          </a>
          <a href="#details" className="hover:text-blue-600">
            Details
          </a>
          <button
            onClick={toggleTheme}
            className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleTheme}
            className="mr-2 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-4 border-t border-gray-200 dark:border-gray-700">
          <a
            href="#features"
            onClick={() => setIsOpen(false)}
            className="block"
          >
            Features
          </a>
          <a
            href="#curriculum"
            onClick={() => setIsOpen(false)}
            className="block"
          >
            Curriculum
          </a>
          <a href="#details" onClick={() => setIsOpen(false)} className="block">
            Details
          </a>
        </div>
      )}
    </nav>
  );
}
