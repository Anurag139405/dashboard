import React, { useEffect, useState } from "react";

const Gauge = ({ value, isDarkMode }) => {
  const [strokeDasharray, setStrokeDasharray] = useState("0 100");
  const maxValue = 100;  
  const percentage = (value / maxValue) * 100;

  useEffect(() => {
    let currentValue = 0;
    const interval = setInterval(() => {
      if (currentValue < percentage) {
        currentValue += 1;  
        setStrokeDasharray(`${currentValue} 100`);  
      } else {
        clearInterval(interval);  
      }
    }, 15); 

    return () => clearInterval(interval); 
  }, [value, percentage]);

  return (
    <div className={`relative w-60 h-60 border rounded-lg py-8 px-4 ${isDarkMode ? 'border-neutral-800 bg-neutral-800' : 'border-gray-300 bg-white'}`}>
      <svg className="rotate-[90deg] w-full h-full" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        {/* Background Circle (Gauge) */}
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className={`stroke-current ${isDarkMode ? 'text-purple-200 dark:text-neutral-700' : 'text-purple-200'}`}
          strokeWidth="1"
          strokeDasharray="100 100"
        ></circle>

        {/* Gauge Progress */}
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className={`stroke-current ${isDarkMode ? 'text-purple-600 dark:text-purple-500' : 'text-purple-600'}`}
          strokeWidth="2"
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
        ></circle>
      </svg>

      {/* Value Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-center">
        <span className={`text-5xl font-bold ${isDarkMode ? 'text-purple-600 dark:text-purple-500' : 'text-purple-600'}`}>{value}</span>
        <span className={`block mt-2 ${isDarkMode ? 'text-purple-600 dark:text-purple-500' : 'text-purple-600'}`}>%</span>
      </div>
    </div>
  );
};

export default Gauge;
