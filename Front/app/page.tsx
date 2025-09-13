"use client";

import { useRouter } from "next/navigation";
import Register from "./componets/organisms/Register";
import Login from "./componets/organisms/Login";

import { useEffect, useState } from "react";

function useSearchParams() {
  const [params, setParams] = useState<URLSearchParams | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setParams(new URLSearchParams(window.location.search));
    }
  }, []);

  return {
    get: (key: string) => (params ? params.get(key) : null),
  };
}

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const isRegister = searchParams.get("view") === "register";

  const toggleView = () => {
    const newView = isRegister ? "login" : "register";
    router.push(`?view=${newView}`, { scroll: false }); // Cambia la URL sin recargar la página
  };

  if (typeof window !== "undefined") {
    // Tu código que usa window aquí
  }

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 gap-9">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl flex justify-center items-center">
        {isRegister ? (
          <Register onClick={toggleView} />
        ) : (
          <Login onClick={toggleView} />
        )}
      </div>
      {/*
      <div className="w-full lg:w-1/2 relative">
        <LoginBanner />
      </div> */}
    </main>
  );
}
