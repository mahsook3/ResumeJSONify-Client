import React from 'react';
import { FaFilePdf, FaPlug, FaBrain, FaGlobe } from 'react-icons/fa';
import { BsFiletypeJson } from "react-icons/bs";

export default function Why() {
  return (
<div className="bg-blue-50 ">
  <div className="items-center max-w-screen-xl px-4 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
    <div className="col-span-2 mb-8">
      <p className="text-lg font-medium text-blue-500 dark:text-blue-500">
        AI-Powered Resume Parsing
      </p>
      <h2 className="mt-3 mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-3xl dark:text-white">
        Add an autofill feature to your existing recruiting page
      </h2>
      <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
        Our powerful API is designed to extract structured data from resumes in PDF format and convert it into JSON format. This feature is incredibly useful for your recruiting page to add an autofill with resume option, powered by AI.
      </p>
      <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
        <div>
          <a
            href="/documentation"
            className="inline-flex items-center text-base font-medium text-blue-500 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
          >
            Explore API Documentation
            <svg
              className="w-5 h-5 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <BsFiletypeJson className="w-10 h-10 mb-2 text-blue-500 md:w-12 md:h-12 dark:text-blue-500" />
        <h3 className="mb-2 text-2xl font-bold dark:text-white">JSON Response</h3>
        <p className="font-light text-gray-500 dark:text-gray-400">
          Extracted data is returned in JSON format for easy integration.
        </p>
      </div>
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <FaPlug className="w-10 h-10 mb-2 text-blue-500 md:w-12 md:h-12 dark:text-blue-500" />
        <h3 className="mb-2 text-2xl font-bold dark:text-white">Seamless Integration</h3>
        <p className="font-light text-gray-500 dark:text-gray-400">
          Easily integrate our API into your existing systems.
        </p>
      </div>
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <FaBrain className="w-10 h-10 mb-2 text-blue-500 md:w-12 md:h-12 dark:text-blue-500" />
        <h3 className="mb-2 text-2xl font-bold dark:text-white">AI-Powered</h3>
        <p className="font-light text-gray-500 dark:text-gray-400">
          Leverage the power of AI to extract data accurately.
        </p>
      </div>
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <FaGlobe className="w-10 h-10 mb-2 text-blue-500 md:w-12 md:h-12 dark:text-blue-500" />
        <h3 className="mb-2 text-2xl font-bold dark:text-white">Global Reach</h3>
        <p className="font-light text-gray-500 dark:text-gray-400">
          Used by companies in over 100 countries.
        </p>
      </div>
    </div>
  </div>
</div>
  );
}