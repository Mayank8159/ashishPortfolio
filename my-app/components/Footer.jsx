'use client';

import { useState } from 'react';
import { FaLinkedin, FaLink } from 'react-icons/fa';
import { toast } from 'react-toastify';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('asishbiz@pm.me');
    setCopied(true);
    toast.success('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full px-4 py-6 bg-white/60 backdrop-blur-md border-t border-white/30 shadow-inner flex flex-col sm:flex-row justify-between items-center text-black text-sm font-medium">
      
      {/* Left Section: Copyright */}
      <div className="mb-4 sm:mb-0">
        © {new Date().getFullYear()} Ashish Sharma. All rights reserved.
      </div>

      {/* Right Section: Contact & Icons */}
      <div className="flex items-center gap-6">
        {/* Email */}
        <div className="relative group">
          <button
            onClick={handleCopy}
            className="text-xs text-black hover:text-neutral-700 transition duration-200 cursor-pointer"
          >
            <span className="group-hover:hidden">asishbiz@pm.me</span>
            <span className="hidden group-hover:inline">Click to copy</span>
          </button>
          {copied && (
            <div className="absolute left-0 top-full mt-1 px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded shadow-md transition-all duration-300 ease-linear whitespace-nowrap max-w-[200px] z-10">
              Email copied to clipboard!
            </div>
          )}
        </div>

        {/* Icons */}
        <div className="flex gap-3 text-lg">
          {/* LinkedIn */}
          <div className="relative group">
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaLinkedin className="hover:text-neutral-700 transition" />
            </a>
            <div className="absolute right-0 transform -translate-x-1/2 top-full mt-1 px-3 py-1 bg-neutral-100/80 text-black text-xs rounded shadow-md opacity-0 translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-linear whitespace-nowrap max-w-[90vw] z-10">
              Hire me on LinkedIn
            </div>
          </div>

          {/* Contora */}
          <div className="relative group">
            <a
              href="https://contora.io/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaLink className="hover:text-neutral-700 transition" />
            </a>
            <div className="absolute right-0 transform -translate-x-1/2 top-full mt-1 px-3 py-1 bg-neutral-100/80 text-black text-xs rounded shadow-md opacity-0 translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-linear whitespace-nowrap max-w-[90vw] z-10">
              Hire me on Contora
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
