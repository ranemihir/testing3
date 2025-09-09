'use client'

import { useState } from 'react'

export default function HomePage() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6 animate-pulse">
          Hello World!
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
          Welcome to this simple and elegant Next.js application
        </p>
        
        {/* Description */}
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          This is a modern Hello World page built with Next.js, TypeScript, and Tailwind CSS. 
          It features responsive design, beautiful gradients, and smooth interactions.
        </p>
        
        {/* Interactive Button */}
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            px-8 py-4 text-lg font-semibold text-white rounded-full
            bg-gradient-to-r from-blue-500 to-purple-600
            hover:from-blue-600 hover:to-purple-700
            transform transition-all duration-300 ease-in-out
            hover:scale-105 hover:shadow-xl
            focus:outline-none focus:ring-4 focus:ring-blue-300
            ${isHovered ? 'shadow-2xl' : 'shadow-lg'}
          `}
        >
          {isHovered ? 'Thanks for hovering! 👋' : 'Hover me!'}
        </button>
        
        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Next.js</h3>
            <p className="text-gray-600">
              Built with the latest Next.js framework for optimal performance and developer experience.
            </p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Tailwind CSS</h3>
            <p className="text-gray-600">
              Styled with Tailwind CSS for rapid development and consistent design systems.
            </p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">TypeScript</h3>
            <p className="text-gray-600">
              Written in TypeScript for better code quality, autocomplete, and error prevention.
            </p>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-400">
            Made with ❤️ using modern web technologies
          </p>
        </div>
      </div>
    </div>
  )
}