import React from 'react';

export const JournalCoverImage: React.FC = () => {
  return (
    <div className="relative w-full h-96 rounded-xl overflow-hidden mb-10">
      <div className="absolute inset-0 bg-gradient-to-br from-klare-a to-klare-r flex items-center justify-center">
        <div className="relative w-72 h-72">
          <div className="absolute inset-0 bg-white/10 rounded-xl transform rotate-3"></div>
          <div className="absolute inset-0 transform -rotate-3 flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl border border-white/20">
            <div className="w-full border-b border-white/20 pb-2 mb-4">
              <div className="text-white text-xl font-semibold">Mein Kongruenz-Journal</div>
              <div className="text-white/70 text-sm">15. April 2025</div>
            </div>
            <div className="space-y-3 w-full">
              <div className="h-3 bg-white/20 rounded-full w-full"></div>
              <div className="h-3 bg-white/20 rounded-full w-5/6"></div>
              <div className="h-3 bg-white/20 rounded-full w-4/6"></div>
              <div className="h-3 bg-white/20 rounded-full w-full"></div>
              <div className="h-3 bg-white/20 rounded-full w-3/6"></div>
            </div>
            <div className="mt-8 border-t border-white/20 pt-4 w-full">
              <div className="flex space-x-2">
                <div className="h-8 w-8 rounded-full bg-white/20"></div>
                <div className="h-8 w-8 rounded-full bg-white/20"></div>
                <div className="h-8 w-8 rounded-full bg-white/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};