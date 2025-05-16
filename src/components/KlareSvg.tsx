import React from 'react';

type KlareSvgProps = {
  letter: 'K' | 'L' | 'A' | 'R' | 'E';
  className?: string;
  width?: number;
  height?: number;
};

const colors = {
  K: '#6366F1', // Indigo
  L: '#8B5CF6', // Violet
  A: '#EC4899', // Pink
  R: '#F59E0B', // Amber
  E: '#10B981', // Emerald
};

export default function KlareSvg({ letter, className = '', width = 36, height = 36 }: KlareSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={width}
      height={height}
      className={className}
    >
      <circle cx="50" cy="50" r="45" fill={colors[letter]} />
      <text 
        x="50" 
        y="68" 
        fontFamily="Arial, sans-serif" 
        fontSize="50" 
        fontWeight="bold" 
        textAnchor="middle" 
        fill="white"
      >
        {letter}
      </text>
    </svg>
  );
}
