"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleStartPranking = () => {
    router.push("/generate");  
  }

  return (
    <div className="relative z-10 h-dvh flex flex-col items-center justify-center text-center max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-6">
        💘 Welcome to the Ultimate Love Calculator Prank!
      </h1>

      <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-10">
        Think your friends are head over heels in love? Let's put that to the test... 
        or at least make them think we are! 😈
        <br />
        Generate a personalized link, send it to your friend, and watch them fall into the prank trap.
      </p>

      <button
        onClick={handleStartPranking}
        className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 transition duration-300 ease-in-out active:scale-95 active:shadow-inner"
      >
        🎯 Start Pranking
      </button>
    </div>
  );
}
