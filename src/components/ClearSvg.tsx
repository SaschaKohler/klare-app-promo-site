import React from 'react';

type ClearSvgProps = {
  letter: 'C' | 'L' | 'E' | 'A' | 'R';
  className?: string;
  width?: number;
  height?: number;
};

// Gleiche Farben wie bei KLARE, nur die Zuordnung geändert
const colors = {
  C: '#6366F1', // Indigo (wie K)
  L: '#8B5CF6', // Violet (wie L)
  E: '#EC4899', // Pink (wie A)
  A: '#F59E0B', // Amber (wie R)
  R: '#10B981', // Emerald (wie E)
};

export default function ClearSvg({ letter, className = '', width = 36, height = 36 }: ClearSvgProps) {
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
