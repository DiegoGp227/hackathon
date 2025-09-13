"use client";

import { useRouter } from "next/navigation";
import Register from "./componets/organisms/Register";
import Login from "./componets/organisms/Login";

function useSearchParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    get: (key: string) => params.get(key),
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
    <main className="w-full relative flex justify-center items-start flex-wrap">
      <div className="w-full md:w-4/5 lg:w-1/2 relative">
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
