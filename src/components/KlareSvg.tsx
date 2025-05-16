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

const paths = {
  K: "M37.5 32 L37.5 68 L45 68 L45 52 L60 68 L70 68 L52 50 L70 32 L60 32 L45 48 L45 32 Z",
  L: "M37.5 32 L37.5 68 L65 68 L65 60 L45 60 L45 32 Z",
  A: "M35 68 L45 32 L55 32 L65 68 L57 68 L55 60 L45 60 L43 68 Z M47 52 L53 52 L50 40 Z",
  R: "M37.5 32 L37.5 68 L45 68 L45 52 L50 52 Q55.5 52 58.25 49.25 Q61 46.5 61 42.5 Q61 38.5 58.25 35.25 Q55.5 32 50 32 L37.5 32 M45 40 L50 40 Q51.5 40 52.75 41 Q54 42 54 43.5 Q54 45 52.75 46 Q51.5 47 50 47 L45 47 L45 40 M53 52 L65 68 L73 68 L59.5 52 L53 52",
  E: "M37.5 32 L37.5 68 L65 68 L65 60 L45 60 L45 52 L60 52 L60 44 L45 44 L45 40 L65 40 L65 32 Z"
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
      <path d={paths[letter]} fill="white" />
    </svg>
  );
}
