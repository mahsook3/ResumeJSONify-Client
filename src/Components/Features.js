import React from 'react';
import { FaUser, FaBook, FaBriefcase, FaLayerGroup } from 'react-icons/fa';

export default function Features() {

  const rawJSON = {
    "details": {
      "name": "Mahsook",
      "email": "mahsook@example.com",
      "phone": "+91 92345 67890",
      "education": [
        {
          "course": "B.E ECE",
          "institute": "XYZ University",
          "score": "8.2"
        }
      ],
      "skills": [
        "Python",
        "JavaScript",
        "C++"
      ],
      "experience": [
        {
          "title": "Software Development Intern",
          "company": "Tech Solutions Ltd.",
          "duration": "June 2023 - Aug 2023"
        }
      ],
      "projects": [
        {
          "name": "E-commerce Website",
          "technologies": [
            "React",
            "Node.js"
          ],
          "description": "Built a full-stack e-commerce platform."
        }
      ],
      "certifications": [
        {
          "name": "AWS Certified Solutions Architect",
          "platform": "Amazon Web Services"
        }
      ],
      "achievements": [
        {
          "title": "1st Place - National Hackathon",
          "competition": "Tech Innovators 2023"
        }
      ]
    }
  };

  const highlightKeys = (jsonString) => {
    return jsonString
      .replace(/"([^"]+)":/g, '<span class="text-orange-600">"$1"</span>:')
      .replace(/([{}[\],])/g, '<span class="text-orange-600">$1</span>')
      .replace(/([^{}[\],]+)/g, '<span class="text-yellow-600">$1</span>');
  };
  return (
<section className="py-8 sm:py-12 lg:py-16">
  <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
    <div>
      <h2 className="text-3xl font-bold text-center sm:text-5xl text-blue-500">
        Powerful Resume Extraction API
      </h2>
      <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-700">
        Seamlessly extract structured data from resumes in PDF format and convert it into JSON, enabling an autofill feature for your recruiting page powered by AI.
      </p>
    </div>
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <div>
        <div className="mt-4 space-y-12">
          <div className="flex flex-col sm:flex-row">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-white">
                <FaUser className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-4">
              <h4 className="text-lg font-medium leading-tight text-blue-500">
                Personal Details Extraction
              </h4>
              <p className="mt-2 text-gray-700">
                Extract key personal information like name, email, phone, website, and social media links from resumes.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-white">
                <FaBook className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-4">
              <h4 className="text-lg font-medium leading-tight text-blue-500">
                Educational Background
              </h4>
              <p className="mt-2 text-gray-700">
                Automatically capture a candidate's educational qualifications, institutions, and related details.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-white">
                <FaBriefcase className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-4">
              <h4 className="text-lg font-medium leading-tight text-blue-500">
                Work Experience
              </h4>
              <p className="mt-2 text-gray-700">
                Extract job titles, companies, durations, and detailed descriptions of roles and responsibilities.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-white">
                <FaLayerGroup className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-4">
              <h4 className="text-lg font-medium leading-tight text-blue-500">
                Projects and Skills
              </h4>
              <p className="mt-2 text-gray-700">
                Automatically extract project details, technologies used, and a list of key skills from the resume.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="mt-10 lg:mt-0">
      <div className="relative">
  <div className="flex justify-between items-center bg-blue-500 p-2 rounded-t-lg">
    <span className="text-white font-semibold">Sample API Response</span>
    <div className="flex space-x-2">
      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="9" strokeWidth="2" />
      </svg>
      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="9" strokeWidth="2" />
      </svg>
      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="9" strokeWidth="2" />
      </svg>
    </div>
  </div>
  <pre
    className="whitespace-pre-wrap break-words bg-gray-800 p-4 rounded-b-lg text-white custom-scrollbar"
    style={{ maxWidth: '100%', height: '400px', overflowY: 'scroll' }}
    dangerouslySetInnerHTML={{ __html: highlightKeys(JSON.stringify(rawJSON, null, 2)) }}
  />
  <style jsx>{`
    .custom-scrollbar::-webkit-scrollbar {
      width: 8px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #2d3748; /* Darker background for the track */
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: #4a5568; /* Darker thumb color */
      border-radius: 4px;
      border: 2px solid #2d3748; /* Match the track background */
    }
    .custom-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: #4a5568 #2d3748;
    }
  `}</style>
</div>
</div>
    </div>
  </div>
</section>
  );
}