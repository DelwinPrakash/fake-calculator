"use client";
import React, { useEffect, useState } from 'react';

const Loading: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let isMounted = true;

    const updateProgress = () => {
      if (!isMounted) return;

      const increment = Math.floor(Math.random() * 5) + 1;
      const delay = Math.floor(Math.random() * 500) + 500;

      setTimeout(() => {
        setProgress(prev => {
          const newProgress = Math.min(prev + increment, 100);
          if (newProgress < 100) {
            updateProgress();
          }
          return newProgress;
        });
      }, delay);
    };

    updateProgress();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="fixed z-100 h-dvh inset-0 flex items-center justify-center bg-none text-white backdrop-blur-sm">
      <div className="text-center">
        <div className="text-xl font-bold mb-4">{progress < 25 ? "AI Analyzing..." : progress < 50 ? "Updating love metrices...": progress < 75 ? "Decrypting affection patterns..." : "Finalizing Result"}</div>
        <div className="w-64 h-4 bg-gray-700 rounded overflow-hidden mx-auto">
          <div
            className="h-full bg-pink-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 text-lg">{progress}%</div>
      </div>
    </div>
  );
};

export default Loading;
