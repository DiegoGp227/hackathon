"use client";

import { useRouter } from "next/navigation";
import { Send } from "lucide-react";

export default function ChatPage() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/home");
  }

  return (
  <div className="flex flex-col h-screen bg-gray-50 w-full">

      {/* Chat area */}
      <main className="flex-1 overflow-y-auto p-4 space-y-3">
        <div className="bg-gray-200 p-3 rounded-lg max-w-[75%]">
          <p>Dinos tu idea de plan</p>
        </div>
      </main>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="p-2 border-t flex items-center gap-2 bg-white w-full fixed bottom-0 left-0 z-10"
        style={{ maxWidth: "100vw" }}
      >
        <input
          type="text"
          placeholder="Escribe tu idea de plan..."
          className="flex-1 border border-gray-300 rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white min-w-0"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 flex-shrink-0"
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}
