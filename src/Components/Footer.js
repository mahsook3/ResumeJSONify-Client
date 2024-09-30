import React from 'react';
import { VscJson } from "react-icons/vsc";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">
          <a href="/" className="flex justify-center items-center space-x-2">
            <VscJson className="w-8 h-8 text-white" />
            <span className="text-white text-2xl font-bold">ResumeJSONify</span>
          </a>
          <ul className="text-lg text-center sm:flex items-center justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500">
            <li>
              <a href="/documentation" className="text-white hover:text-gray-400">
                Documentation
              </a>
            </li>
            <li className="sm:my-0 my-2">
              <a href="/" className="text-white hover:text-gray-400">
                API
              </a>
            </li>
            <li>
              <a href="pricing" className="text-white hover:text-gray-400">
                Pricing
              </a>
            </li>
            <li className="sm:my-0 my-2">
              <a href="/" className="text-white hover:text-gray-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                Support
              </a>
            </li>
          </ul>

        </div>
      </div>
      <div className="py-7 border-t border-gray-700">
      <div className="flex items-center justify-center">
        <span className="text-gray-400 ">
        Made with ❤️ in Kovai | கோவையில் ❤️ உருவாக்கப்பட்டது
        </span>
      </div>
    </div>
    </footer>
  );
}
