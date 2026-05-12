'use client';

import { motion } from 'framer-motion';

interface RollingTextProps {
  text: string;
  className?: string;
}

export default function RollingText({ text, className = "" }: RollingTextProps) {
  return (
    <div className={`relative overflow-hidden h-6 group-hover:h-6 ${className}`}>
      <div className="flex flex-col transition-transform duration-500 ease-[0.23,1,0.32,1] group-hover:-translate-y-1/2">
        {/* First Text */}
        <span className="flex items-center justify-center h-6">
          {text}
        </span>
        
        {/* Second Text */}
        <span className="flex items-center justify-center h-6">
          {text}
        </span>
      </div>
    </div>
  );
}
