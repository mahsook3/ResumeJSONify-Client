import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import pdfToText from "react-pdftotext";
import { FaCopy } from 'react-icons/fa';

function Upload() {
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({});
  const [rawResponse, setRawResponse] = useState(null);
  const [loadingText, setLoadingText] = useState(".");
  const [fileName, setFileName] = useState("");
  const [copied, setCopied] = useState(false);


  


  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setLoadingText((prev) => (prev.length < 3 ? prev + "." : "."));
      }, 500);
    } else {
      setLoadingText(".");
    }
    return () => clearInterval(interval);
  }, [loading]);

  function extractText(event) {
    const file = event.target.files[0];
    setFileName(file.name);
  }

  function handleSubmit() {
    const fileInput = document.getElementById("photo-dropbox");
    const file = fileInput.files[0];
    if (!file) {
      toast.error("Please select a file first.");
      return;
    }
    if (file) {
      setLoading(true);
      setRawResponse(null);

      pdfToText(file)
        .then((text) => {
          console.log("Extracted text:", text);

          // Send POST request to the server
          fetch("https://resumejsonify-server.onrender.com/process-text", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: text }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Server response:", data);
              setRawResponse(JSON.stringify(data, null, 2)); // Store raw JSON response
              setLoading(false);
            })
            .catch((error) => {
              console.error("Failed to send text to server", error);
              toast.error("Failed to send text to server");
              setLoading(false);
            });
        })
        .catch((error) => {
          console.error("Failed to extract text from PDF", error);
          toast.error("Failed to extract text from PDF");
          setLoading(false);
        });
    } else {
      toast.error("Please select a file first.");
    }
  }


  const highlightKeys = (jsonString) => {
    return jsonString
      .replace(/"([^"]+)":/g, '<span class="text-orange-600">"$1"</span>:')
      .replace(/([{}[\],])/g, '<span class="text-orange-600">$1</span>')
      .replace(/([^{}[\],]+)/g, '<span class="text-yellow-600">$1</span>');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(rawResponse).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-5 text-center">
        <p className="inline-block border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out">
          Convert PDF resumes into structured JSON data
        </p>

        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl mt-6">
          <span className="inline-block">
            Robust
            <span className="relative whitespace-nowrap text-blue-600">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>{" "}
              <span className="relative">API</span>
            </span>{" "}
            Resume Parsing
          </span>
        </h1>
      </div>

      <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg border-dotted border-4 border-gray-300">
            <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
              Upload your Resume
            </h1>
            <label className="flex flex-col items-center cursor-pointer justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 px-6 py-8 text-sm transition hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
              <span className="flex items-center space-x-2 mb-4">
                <svg className="h-8 w-8 text-gray-400" viewBox="0 0 256 256">
                  <path
                    d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={24}
                  />
                  <path
                    d="M80,128a80,80,0,1,1,144,48"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={24}
                  />
                  <polyline
                    points="118.1 161.9 152 128 185.9 161.9"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={24}
                  />
                  <line
                    x1={152}
                    y1={208}
                    x2={152}
                    y2={128}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={24}
                  />
                </svg>
                <span className="text-gray-600">
                  <span className="text-blue-600 underline">
                    {fileName || "Select a file"}
                  </span>
                </span>
              </span>
              <input
                id="photo-dropbox"
                type="file"
                accept="application/pdf"
                onChange={extractText}
                className="sr-only"
              />
            </label>
            <button
              className="
      group
      mt-6
      p-5
      cursor-pointer 
      relative  
      text-xl 
      font-normal 
      border-0 
      flex 
      items-center 
      justify-center
      bg-blue-600
      text-white 
      h-auto  
      w-full  
      rounded-lg
      overflow-hidden   
      transition-all
      duration-100"
              onClick={handleSubmit}
              disabled={loading}
            >
              <span
                className="
        group-hover:w-full
        absolute 
        left-0 
        h-full 
        w-5 
        border-y
        border-l
        border-blue-600
        transition-all
        duration-500"
              ></span>
              <p
                className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
        duration-200"
              >
                {loading ? "Please wait" : "Try Now"}
              </p>
              <span className="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">
                {loading ? "Processing..." : "Upload"}
              </span>
              <span className="group-hover:w-full absolute right-0 h-full w-5  border-y border-r  border-blue-600 transition-all duration-500"></span>
            </button>
          </div>

          <div className="w-full lg:w-1/2 bg-black text-white p-6 rounded-lg shadow-md h-96 overflow-y-auto">
      <div className="relative">
        <pre className="whitespace-pre-wrap break-words bg-gray-800 p-4 rounded-lg">
          {loading
            ? loadingText
            : rawResponse
            ? <span dangerouslySetInnerHTML={{ __html: highlightKeys(rawResponse) }} />
            : "Upload your resume to see the JSON response"}
        </pre>
        {rawResponse && (
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 flex items-center bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
          >
            <FaCopy className="mr-2" />
            {copied ? "Copied" : "Copy"}
          </button>
        )}
      </div>
    </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Upload;
