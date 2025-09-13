"use client";

import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { useChat } from "@/src/chat/hooks/useChat";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const { messages, loading, sendMessage } = useChat({ endpoint: "/api/chatgpt" });
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(input);
    setInput("");
  };

  // Scroll automático al último mensaje
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="flex flex-col h-screen bg-gray-50 w-full">
      {/* Chat area */}
      <main className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-lg max-w-[75%] break-words ${
              msg.type === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-200 text-gray-800 mr-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="p-3 rounded-lg max-w-[75%] bg-gray-200 text-gray-800 mr-auto">
            Escribiendo...
          </div>
        )}
        <div ref={bottomRef} />
      </main>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="p-2 border-t flex items-center gap-2 bg-white w-full fixed bottom-0 left-0 z-10"
        style={{ maxWidth: "100vw" }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
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
