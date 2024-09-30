import React from 'react'

export default function DashBoard() {
  return (
<div className="min-h-screen flex flex-col justify-center items-center">
  <img
    src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
    alt="Logo"
    className="mb-8 h-40"
  />
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4">
    Site is under maintenance
  </h1>
  <p className="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">
    For any inquiries please contact{" "}
    <a href="mailto:mahsook.m.a@gmail.com">mahsook.m.a@gmail.com</a>
  </p>
</div>
  )
}
