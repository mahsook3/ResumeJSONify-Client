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

  return (
    <section className="">
      <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold text-center sm:text-5xl text-blue-500">
            Powerful Resume Extraction API
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-700">
            Seamlessly extract structured data from resumes in PDF format and convert it into JSON, enabling an autofill feature for your recruiting page powered by AI.
          </p>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mt-4 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-white">
                    <FaUser className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-tight text-blue-500">
                    Personal Details Extraction
                  </h4>
                  <p className="mt-2 text-gray-700">
                    Extract key personal information like name, email, phone, website, and social media links from resumes.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-white">
                    <FaBook className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-tight text-blue-500">
                    Educational Background
                  </h4>
                  <p className="mt-2 text-gray-700">
                    Automatically capture a candidate's educational qualifications, institutions, and related details.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-white">
                    <FaBriefcase className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-tight text-blue-500">
                    Work Experience
                  </h4>
                  <p className="mt-2 text-gray-700">
                    Extract job titles, companies, durations, and detailed descriptions of roles and responsibilities.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-white">
                    <FaLayerGroup className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
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
              <pre className="whitespace-pre-wrap break-words bg-gray-800 p-4 rounded-lg text-white" style={{ width: '600px', height: '400px', overflow: 'auto' }}>
                {JSON.stringify(rawJSON, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}