import { Suspense } from "react";
import Pranked from "@/components/ui/Pranked";

export default function Calculate() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center">Loading...</div>}>
            <Pranked />
        </Suspense>
    )
}