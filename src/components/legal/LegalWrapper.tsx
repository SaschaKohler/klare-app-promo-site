'use client';
import React from 'react';

interface LegalPageWrapperProps {
  children: React.ReactNode;
}

const LegalPageWrapper: React.FC<LegalPageWrapperProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-0.5 z-50 transition-all duration-300"
        style={{
          width: `${typeof window !== 'undefined' ? (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100 : 0}%`,
          background: `linear-gradient(to right, var(--klare-k), var(--klare-a))`,
        }}
      />

      {/* Hauptinhalt */}
      {children}
    </div>
  );
};

export default LegalPageWrapper;
