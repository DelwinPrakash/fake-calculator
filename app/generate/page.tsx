"use client";
import { useState } from "react";

export default function Home() {
  const [generatedLink, setGeneratedLink] = useState("http://localhost:3000/calculate?uuid=12345");

  return (
    <main className="relative flex h-screen justify-center bg-gradient-to-br from-pink-300 to-rose-300 p-2 overflow-hidden">
      <div className="absolute w-full h-full flex items-center justify-center pointer-events-none">
        <div className="relative w-80 h-80 animate-pulse bg-none">
          <div className="absolute w-80 h-80 top-0 left-20 bg-pink-400 rounded-full blur-2xl opacity-50" />
          <div className="absolute w-80 h-80 top-0 right-10 bg-rose-400 rounded-full blur-2xl opacity-50" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-2">
        <h1 className="text-4xl md:text-5xl font-bold text-rose-700 mb-6">
          🔗 Create Your Prank Link
        </h1>

        <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-8">
          You'll get a unique link—just copy it and send it to your target, you can see the details back here!
        </p>

        <button
          // onClick={handleGenerateLink}
          className="w-full py-3 bg-none backdrop-blur-sm border border-pink-200 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out active:scale-95 active:shadow-inner cursor-pointer"
        >
          🎁 Generate My Link
        </button>

        {true && (
          <div className="mt-8 p-4 bg-none backdrop-blur-3xl border border-pink-300 rounded-lg shadow-sm w-full">
            <p className="text-gray-700 font-medium mb-2">Your Prank Link:</p>
            <input
              type="text"
              readOnly
              value={generatedLink}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm text-gray-600 cursor-text"
            />
          </div>
        )}

        <p className="mt-6 text-sm text-gray-500 max-w-md">
          Don’t worry, we’re not storing anything forever, everything will be auto deleted after 2 days — this is just for laughs!
        </p>

      </div>
    </main>
  );
}
