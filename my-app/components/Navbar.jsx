"use client";

import { useEffect, useState } from "react";
import { FaLinkedin, FaLink } from "react-icons/fa";
import { toast } from "react-toastify";

const marqueeItems = [
  "Web Design",
  "Webflow",
  "Framer",
  "Mobile App",
  "UI/UX",
  "React",
  "Tailwind",
];

export default function Navbar() {
  const [time, setTime] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(formatted);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("asishbiz@pm.me");
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <nav className="sticky top-0 z-50 w-full px-4 py-3 bg-white border-b border-gray-200 shadow-lg flex justify-between items-center text-black font-medium">
      {/* Left Section */}
      <div className="flex items-center gap-4 text-sm">
        {/* Work Link */}
        <div className="relative group hidden md:block">
          <a href="#work" className="hover:underline text-gray-500 cursor-pointer">
            Work
          </a>
          <div className="absolute left-0 top-full mt-1 px-3 py-1 bg-neutral-100 text-black text-xs rounded shadow-md opacity-0 translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-linear whitespace-nowrap z-10">
            View my work
          </div>
        </div>

        {/* Resume Link */}
        <div className="relative group">
          <a href="#resume" className="hover:underline text-gray-500 cursor-pointer">
            Resume
          </a>
          <div className="absolute left-0 top-full mt-1 px-3 py-1 bg-neutral-100 text-black text-xs rounded shadow-md opacity-0 translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-linear whitespace-nowrap z-10">
            Read in new tab
          </div>
        </div>

        {/* Time */}
        <span className="text-gray-500">Kolkata — {time}</span>

        {/* Email Copy */}
        <div className="relative group">
          <button
            onClick={handleCopy}
            className="text-xs text-gray-500 hover:text-neutral-700 transition duration-200 cursor-pointer"
          >
            <span className="group-hover:hidden">asishbiz@pm.me</span>
            <span className="hidden group-hover:inline">Click to copy</span>
          </button>
          {copied && (
            <div className="absolute left-0 top-full mt-2 px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded shadow-md transition-all duration-300 ease-linear whitespace-nowrap z-10">
              Email copied to clipboard!
            </div>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex items-center gap-6 relative">
        {/* Marquee */}
        <div className="relative overflow-hidden w-48 h-6 text-neutral-500">
          <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
          <div className="absolute whitespace-nowrap flex animate-marquee gap-6 text-sm sm:text-base">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i}>{item} •</span>
            ))}
          </div>
        </div>

        {/* Icons */}
        <div className="flex gap-3 text-lg text-black">
          <div className="relative group">
            <a
              href="https://www.linkedin.com/in/ashishkgp/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="hover:text-neutral-700 transition cursor-pointer" />
            </a>
            <div className="absolute right-0 top-full mt-1 px-3 py-1 bg-neutral-100 text-black text-xs rounded shadow-md opacity-0 translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-linear whitespace-nowrap z-10">
              Open LinkedIn Profile
            </div>
          </div>

          <div className="relative group">
            <a
              href="https://contora.io/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contora Profile"
            >
              <FaLink className="hover:text-neutral-700 transition cursor-pointer" />
            </a>
            <div className="absolute right-0 top-full mt-1 px-3 py-1 bg-neutral-100 text-black text-xs rounded shadow-md opacity-0 translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-linear whitespace-nowrap z-10">
              Hire me on Contora
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </nav>
  );
}