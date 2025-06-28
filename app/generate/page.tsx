"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { supabase } from "@/lib/supabase";

type TableData = {
  id: string;
  user1: string;
  user2: string;
};

export default function Generate() {
  // const router = useRouter();

  const [generatedLink, setGeneratedLink] = useState("");
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [existingId, setExistingId] = useState<string | null>(null);
  
  useEffect(() => {
    const nanoid = localStorage.getItem("love-calculator-nanoid");
    if(nanoid){
      setExistingId(nanoid);
      
      const fetchData = async () => {
        try{
          const { data } = await supabase
            .from("love_matches")
            .select("*")
            .eq("nanoid", nanoid)
            .order("created_at", { ascending: false });

          if(data && data.length > 0){
            setTableData(data);
          }
        }catch(error){
          console.error("Error fetching existing data:", error);
        }
      }
      fetchData();
    }
  }, []);
  
  const handleGenerateLink = () => {    
    if(existingId){
      setGeneratedLink(`http://localhost:3000/calculate?id=${existingId}`);
      return;
    }

    const id = nanoid(15);
    localStorage.setItem("love-calculator-nanoid", id);
    setGeneratedLink(`http://localhost:3000/calculate?id=${id}`);
    // router.push(`/calculate?id=${id}`);
  };

  return (
    <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-bold text-rose-700 mb-6">
        🔗 Create Your Prank Link
      </h1>

      <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-8">
        You'll get a unique link—just copy it and send it to your target, you can see the details back here!
      </p>

      <button
        onClick={handleGenerateLink}
        className="w-full py-3 bg-none backdrop-blur-sm border border-pink-200 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out active:scale-95 active:shadow-inner cursor-pointer"
      >
        🎁 Generate My Link
      </button>

      {true && (
        <div className="mt-8 p-4 bg-none backdrop-blur-3xl border border-pink-300 rounded-lg shadow-md w-full">
          <p className="text-gray-700 font-medium mb-2">Your Prank Link (click to copy):</p>
          <div className="py-2 min-h-11 border border-gray-200 rounded text-gray-600 cursor-pointer shadow-md transition duration-300 ease-in-out active:scale-95 active:shadow-inner" onClick={() => navigator.clipboard.writeText(generatedLink)}>{generatedLink}</div>
        </div>
      )}

      <p className="mt-6 text-sm text-gray-500 max-w-md px-3">
        Don’t worry, we’re not storing anything forever, everything will be auto deleted after 2 days — this is just for laughs!
      </p>

      <div className="overflow-x-auto w-full mt-4">
        <table className="min-w-full shadow-md rounded-lg overflow-hidden">
          <thead className="bg-pink-600 text-white text-center">
            <tr>
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Partner name</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={row.id}
                className="border-b bg-rose-400 backdrop-blur-md"
              >
                <td className="py-3 px-4 border-r border-white">{index + 1}</td>
                <td className="py-3 px-4 border-r border-white">{row.user1}</td>
                <td className="py-3 px-4">{row.user2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
