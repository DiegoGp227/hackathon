"use client";

import { useRouter } from "next/navigation";
import { Send } from "lucide-react";
import { useState, useEffect } from "react";

function useTypewriter(text: string, speed: number = 10) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayedText;
}

export default function ChatPage() {
  const router = useRouter();
  const [showAnswer, setShowAnswer] = useState(false);

  const textAnswer = `¡Hola! Soy Localito, tu asistente virtual de LocalTrip, listo para ayudarte a descubrir Bogotá de una manera única y práctica.
  
🗺️ Planes Imperdibles en Bogotá

Centro Histórico – La Candelaria
Explora la Plaza de Bolívar, la Catedral Primada y el Capitolio Nacional.
Visita el Museo del Oro y el Museo Botero.
Recorre las calles empedradas y disfruta de la arquitectura colonial.

Cerro de Monserrate
Sube en teleférico o funicular para obtener una vista panorámica de la ciudad.
Visita la iglesia y disfruta de la gastronomía local en el restaurante del cerro.

Zona T y Zona Rosa
Disfruta de la vida nocturna, bares y restaurantes de alta gama.
Ideal para compras y entretenimiento.

Parque de los Novios
Perfecto para un paseo relajante, picnic o paseo en bote.
Ubicado en el norte de Bogotá, cerca de la Calle 127.

Ciclovía Dominical
Cada domingo y festivo, más de 120 km de vías se abren para ciclistas, patinadores y peatones.
Una forma divertida y saludable de explorar la ciudad.

🚍 Cómo Moverte por Bogotá

TransMilenio
Sistema rápido y eficiente que conecta las principales zonas de la ciudad.
Utiliza la tarjeta Tu Llave para acceder al servicio.
Consulta rutas y horarios en la página oficial.`;

  const animatedText = useTypewriter(showAnswer ? textAnswer : "", 10);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setShowAnswer(true);
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50 w-full">
      {/* Chat area */}
      <main className="flex-1 overflow-y-auto p-4 space-y-3">
        {/* Mensaje de bienvenida */}
        <div className="bg-blue-100 p-3 rounded-lg max-w-[75%] mb-2 shadow">
          <span className="font-semibold text-blue-700">Localito:</span>
          <p className="mt-1 text-gray-800">
            Soy Localito, tu asistente virtual de LocalTrip en Bogotá 😎.<br />
            Pregúntame lo que quieras sobre planes, turismo, gastronomía o lugares escondidos en la ciudad y te daré las mejores recomendaciones adaptadas a tus gustos y al momento.
          </p>
        </div>
        {/* Respuesta con efecto escritura */}
        {showAnswer && (
          <div className="bg-gray-200 p-3 rounded-lg max-w-[75%] mb-2 shadow whitespace-pre-line">
            <span className="font-semibold text-blue-700">Localito:</span>
            <p className="mt-1 text-gray-800">{animatedText}</p>
          </div>
        )}
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
