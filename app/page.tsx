"use client";

export default function Home() {
  const handleStartPranking = () => {
    const randomNumber = Math.floor(Math.random() * 1000000);
    const prankLink = `https://love-calculator-prank.com/${randomNumber}`;
    navigator.clipboard.writeText(prankLink);
    alert(`Prank link copied to clipboard: ${prankLink}`);
  }

  return (
    <main className="relative flex h-dvh items-center justify-center bg-gradient-to-br from-pink-300 to-rose-300 p-5 overflow-hidden">
      <div className="absolute w-full h-full flex items-center justify-center pointer-events-none">
        <div className="relative w-80 h-80 animate-pulse">
          <div className="absolute w-80 h-80 top-0 left-20 bg-pink-300 rounded-full blur-2xl" />
          <div className="absolute w-80 h-80 top-0 right-10 bg-rose-300 rounded-full blur-2xl shadow-xl" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl px-4">
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
          className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 transition duration-300"
        >
          🎯 Start Pranking
        </button>
      </div>
    </main>
  );
}
