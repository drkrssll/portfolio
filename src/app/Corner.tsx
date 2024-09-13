import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Corner = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 right-0 w-[100px] h-[100px] overflow-visible">
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="absolute top-0 right-0"
      >
        <polygon
          points="0,0 100,0 100,100"
          fill="white"
        />
      </svg>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-2 right-2 text-black z-10 text-center align-middle border-black"
      >
        <ChevronDown size={42} />
      </button>
      {isOpen && (
        <div className="absolute top-10 right-10 bg-dark shadow-md rounded-md p-5 z-20">
          <ul className="space-y-2">
            <li><a href="/" className="text-white-600 hover:underline">Home</a></li>
            <li><a href="/about" className="text-white-600 hover:underline">Showcase</a></li>
            <li><a href="/contact" className="text-white-600 hover:underline">Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Corner;
