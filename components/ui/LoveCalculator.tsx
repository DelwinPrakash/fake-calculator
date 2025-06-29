"use client";
import Loading from "@/components/Loading";
import { supabase } from "@/lib/supabase";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function LoveCalculator() {
    const router = useRouter()
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const [loading, setLoading] = useState(false);
    const [yourName, setYourName] = useState("");
    const [partnerName, setPartnerName] = useState("");
    const [error, setError] = useState("");

    const handleCalculate = async () => {
        setError("");
        if (!yourName || !partnerName) {
            setError("Both names are required.");
            return;
        }
        try{
            setLoading(true);
            
            await supabase.from("love_matches").insert({
                nanoid: id,
                user1: yourName,
                user2: partnerName
            });

            setTimeout(() => {
                router.push(`/pranked?name=${encodeURIComponent(yourName)}&partner=${encodeURIComponent(partnerName)}`)
                setLoading(false);
            }, 10000);
        
        }catch(error){
            console.error("Error during calculation:", error);
            setError("An error occurred while calculating. Please try again.");
            return;
        }
    };

    if(loading){
        return <Loading/>
    }

    return (
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-rose-700 mb-6">
                💖 The Official Love Compatibility Test 💖
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-8">
                Curious how compatible you and your partner really are?
                Enter your names and let the Love Calculator do its magic! 💫
            </p>

            <div className="w-full max-w-md">
                <input
                    type="text"
                    value={yourName}
                    onChange={(e) => setYourName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 mb-4 text-lg border border-pink-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                />

                <input
                    type="text"
                    value={partnerName}
                    onChange={(e) => setPartnerName(e.target.value)}
                    placeholder="Your Partner’s Name"
                    className="w-full px-4 py-3 mb-6 text-lg border border-pink-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                {error && (
                    <div className="mb-4 text-red-600">
                        {error}
                    </div>
                )}
                <button
                    onClick={handleCalculate}
                    className="w-full py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 transition duration-300 ease-in-out active:scale-95 active:shadow-inner cursor-pointer"
                >
                    💘 Calculate Love Score
                </button>
            </div>

            <p className="mt-6 text-sm text-gray-500 max-w-sm">
                AI powered, 100% accurate and scientifically questionable ❤️
            </p>
        </div>
    )
}