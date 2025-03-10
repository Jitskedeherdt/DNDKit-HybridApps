"use client"

import DragAndDrop from "@/components/DragAndDrop";

export default function Home() {
    return (
        <main className="flex min-h-screen justify-center p-10">
            <div>
                <h1 className="text-center">Mijn Taken</h1>
                <DragAndDrop/>
            </div>
        </main>
    )
}