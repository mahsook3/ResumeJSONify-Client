import React, { useState } from 'react';
import { VscJson } from 'react-icons/vsc';

export default function Header() {
    const [state, setState] = useState(false);

    const navigation = [
        { title: "Home", path: "/" },
        { title: "Features", path: "/features" },
        { title: "Pricing", path: "/pricing" },
        { title: "Documentation", path: "/Documentation" }
    ];

    return (
        <nav className="bg-white w-full border-b md:border-0 md:static">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <a href="https://pagedone.io/" className="flex justify-center items-center space-x-2">
            <VscJson className="w-8 h-8 text-blue-500" />
            <span className="text-blue-500 text-2xl font-bold">ResumeJSONify</span>
          </a>
                    <div className="md:hidden">
                        <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 justify-self-center pb-3 mt-8 md:flex md:items-center md:justify-end md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="flex items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-gray-600 hover:text-blue-500">
                                        <a href={item.path}>
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="ml-4 mt-3 md:mt-0">
                        <a href="/login" className="py-3 px-4 text-white bg-blue-500 hover:bg-indigo-700 rounded-md shadow">
                            Get API Now
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}