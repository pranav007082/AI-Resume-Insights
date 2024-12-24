import React from 'react';

interface CircleProgressProps {
  score: number;
  maxScore?: number;
  size?: number;
  strokeWidth?: number;
}

const CircleProgress: React.FC<CircleProgressProps> = ({
  score,
  maxScore = 10,
  size = 60,
  strokeWidth = 4,
}) => {
  // Calculate percentage and parameters for SVG
  const percentage = (score / maxScore) * 100;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#f1f1f1"
          strokeWidth={strokeWidth}
        />
        
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#FF6B6B"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-in-out"
        />
      </svg>
      
      {/* Score text */}
      <span className="absolute text-lg font-semibold">
        {score}
      </span>
    </div>
  );
};



export default CircleProgress;