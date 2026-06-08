import React from 'react';

export default function EbookCover() {
  return (
    <div className="w-[400px] h-[600px] bg-[#0a0a0a] border border-[#D4AF37]/40 p-8 flex flex-col justify-between items-center text-center shadow-2xl relative overflow-hidden rounded-md">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-1/2 bg-[#D4AF37] opacity-[0.08] blur-[80px] rounded-full pointer-events-none"></div>

      <div className="mt-16 z-10">
        <h2 className="text-[#D4AF37] tracking-[0.2em] text-xs font-semibold mb-6 uppercase">
          Exclusive Guide
        </h2>
        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5C3] to-[#D4AF37] leading-[1.1] mb-6 drop-shadow-lg">
          HOW TO<br/>EARN<br/>WITH AI
        </h1>
        <p className="text-gray-300 text-lg font-light tracking-wide">
          Different Methods<br/>for Beginners
        </p>
      </div>

      <div className="mb-10 z-10 w-full flex flex-col items-center">
        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6"></div>
        <p className="text-[#D4AF37] text-xl font-bold tracking-[0.15em] uppercase">
          By ZX6YN
        </p>
        <p className="text-gray-500 text-sm mt-3 italic font-serif">
          Start Your AI Income Journey Today
        </p>
      </div>

      <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#D4AF37] opacity-60"></div>
      <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#D4AF37] opacity-60"></div>
      <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#D4AF37] opacity-60"></div>
      <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#D4AF37] opacity-60"></div>
    </div>
  );
}