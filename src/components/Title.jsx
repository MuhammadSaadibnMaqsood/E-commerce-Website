import React from 'react';
import './Title.css';

const Title = ({ text1, text2,disc}) => {
  return (
    <div className="flex flex-col justify-center items-center py-8">
      {/* Title Box with Animated Border */}
      <div className="relative w-[60%] text-4xl font-bold text-gray-900 dark:text-white 
                      border-4 border-transparent 
                        p-4 tracking-wide 
                      transition-all duration-500 ease-in-out hover:scale-105">
        {text1} {text2}
      </div>

      {/* Subtitle / Description */}
      <p className="w-[50%] disc text-center text-gray-700 dark:text-gray-300 text-lg mt-4 p-3 
                   border-l-4 border-purple-500 shadow-lg bg-white dark:bg-gray-800 
                   rounded-md transition-opacity duration-500 opacity-90 hover:opacity-100">
       {disc}
      </p>
    </div>
  );
}

export default Title;
