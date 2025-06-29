import { Suspense } from "react";
import LoveCalculator from "@/components/ui/LoveCalculator";

export default function Calculate() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center">Loading...</div>}>
            <LoveCalculator />
        </Suspense>
    )
}