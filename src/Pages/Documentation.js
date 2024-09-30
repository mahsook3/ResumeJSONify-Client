import React from 'react';

export default function Documentation() {
  return (
    <>
      {/*Title*/}
      <div className="text-center pt-16 md:pt-32">
        <p className="text-sm md:text-base text-blue-500 font-bold">
          API Documentation
        </p>
        <h1 className="font-bold break-normal text-3xl md:text-5xl">
          Welcome to ResumeJSONify Documentation
        </h1>
      </div>

      {/*Container*/}
      <div className="container max-w-5xl mx-auto">
        <div className="mx-0 sm:mx-6">
          <div
            className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"
            style={{ fontFamily: "Georgia,serif" }}
          >
            {/*Post Content*/}

            {/*Introduction*/}
            <p className="text-2xl md:text-3xl mb-5">
              ResumeJSONify provides a powerful API for parsing resumes from PDF format and converting them into structured JSON data. Perfect for adding an autofill feature to your recruiting page.
            </p>

            {/*API Overview*/}
            <h2 className="font-bold text-xl md:text-2xl">API Overview</h2>
            <p className="py-6">
              Our API is designed to extract structured data from resumes, enabling businesses to automate the candidate data extraction process. It supports key details like personal information, education, work experience, skills, and more.
            </p>

            {/*API Usage Steps*/}
            <h2 className="font-bold text-xl md:text-2xl">API Usage</h2>
            <ol className="list-decimal pl-8 py-6">
              <li className="py-3">
                <strong>Upload PDF Resume:</strong> Submit a PDF resume through the API.
              </li>
              <li className="py-3">
                <strong>JSON Response:</strong> The API returns structured data in JSON format for easy integration into your recruiting systems.
              </li>
              <li className="py-3">
                <strong>Integration:</strong> Use the extracted data to autofill forms, profile fields, or other custom uses.
              </li>
            </ol>

            {/*JSON Response Example*/}
            <h2 className="font-bold text-xl md:text-2xl">JSON Response Example</h2>
            <pre className="bg-gray-900 rounded text-white font-mono text-base p-4">
              {"{"}
              {"\n"}
              {"  \"details\": {"}
              {"\n"}
              {"    \"name\": \"Mahsook\","}
              {"\n"}
              {"    \"email\": \"mahsook@example.com\","}
              {"\n"}
              {"    \"phone\": \"+91 92345 67890\","}
              {"\n"}
              {"    \"education\": [{"}
              {"\n"}
              {"      \"course\": \"B.E ECE\","}
              {"\n"}
              {"      \"institute\": \"XYZ University\","}
              {"\n"}
              {"      \"score\": \"8.2\""}
              {"\n"}
              {"    }],"}
              {"\n"}
              {"    \"skills\": [\"Python\", \"JavaScript\", \"C++\"],"}
              {"\n"}
              {"    \"experience\": [{"}
              {"\n"}
              {"      \"title\": \"Software Development Intern\","}
              {"\n"}
              {"      \"company\": \"Tech Solutions Ltd.\","}
              {"\n"}
              {"      \"duration\": \"June 2023 - Aug 2023\""}
              {"\n"}
              {"    }],"}
              {"\n"}
              {"    \"projects\": [{"}
              {"\n"}
              {"      \"name\": \"E-commerce Website\","}
              {"\n"}
              {"      \"technologies\": [\"React\", \"Node.js\"],"}
              {"\n"}
              {"      \"description\": \"Built a full-stack e-commerce platform.\""}
              {"\n"}
              {"    }],"}
              {"\n"}
              {"    \"certifications\": [{"}
              {"\n"}
              {"      \"name\": \"AWS Certified Solutions Architect\","}
              {"\n"}
              {"      \"platform\": \"Amazon Web Services\""}
              {"\n"}
              {"    }],"}
              {"\n"}
              {"    \"achievements\": [{"}
              {"\n"}
              {"      \"title\": \"1st Place - National Hackathon\","}
              {"\n"}
              {"      \"competition\": \"Tech Innovators 2023\""}
              {"\n"}
              {"    }]"}

              {"\n"}
              {"  }"}
              {"\n"}
              {"}"}
            </pre>

            {/*Key Features*/}
            <h2 className="font-bold text-xl md:text-2xl mt-8">Key Features</h2>
            <ul className="list-disc pl-8 py-6">
              <li className="py-3">
                <strong>Personal Details Extraction:</strong> Extract names, emails, phone numbers, and social media links.
              </li>
              <li className="py-3">
                <strong>Education:</strong> Capture details about educational qualifications, including courses and institutions.
              </li>
              <li className="py-3">
                <strong>Work Experience:</strong> Extract roles, companies, durations, and detailed descriptions.
              </li>
              <li className="py-3">
                <strong>Projects & Skills:</strong> Automatically identify technologies, projects, and key skills.
              </li>
            </ul>

            {/*Integration Guide*/}
            <h2 className="font-bold text-xl md:text-2xl">Integration Guide</h2>
            <p className="py-6">
              Our API integrates seamlessly with most recruitment systems, allowing you to automate resume parsing and provide an enhanced user experience with features like autofill during the application process.
            </p>           
          </div>
        </div>
      </div>
    </>
  );
}
