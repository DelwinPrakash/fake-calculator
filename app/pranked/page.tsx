"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function Pranked(){
    const searchParams = useSearchParams();
    const router = useRouter();
    const name = searchParams.get("name") || "You";
    const partner = searchParams.get("partner") || "Your partner";

    const handlePrankAnother = () => {
        router.push("/");
    };

    return (
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-rose-700 mb-6">
                😂 You've Been Pranked!
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-4">
                Gotcha! There’s no real love calculator here...
            </p>

            <p className="text-md md:text-lg text-gray-600 max-w-xl mb-8">
                But guess what? The names you entered:
            </p>

            <div className="bg-none border border-pink-100 rounded-lg p-4 mb-6 w-full max-w-sm text-gray-800 backdrop-blur-md shadow-md">
                <p><strong>Your Name:</strong> {name}</p>
                <p><strong>Partner’s Name:</strong> {partner}</p>
            </div>

            <p className="text-gray-700 mb-8">
                have been secretly sent to <span className="font-semibold text-pink-600">your friend</span> 💌
            </p>

            <button
                onClick={handlePrankAnother}
                className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 transition duration-300 ease-in-out active:scale-95 active:shadow-inner cursor-pointer"
            >
                Prank Someone Else
            </button>

            <p className="mt-6 text-sm text-gray-500 max-w-sm">
                This was all in good fun — share the laugh and keep the love going! 😄
            </p>
        </div>
    );
}