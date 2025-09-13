"use client";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  function register() {
    router.push("/home");
  }

  return (
    <div className="flex justify-center items-center flex-col border-2 border-blue-200 rounded shadow-md w-[400px] h-[500px] p-9 mt-1">
      <h1 className="text-2xl font-bold mb-4">Registro</h1>
      <form onSubmit={register} className="w-full gap-8 flex flex-col">
        <div className="flex flex-col">
          <label htmlFor="name" className="p-2">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="p-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="p-2">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="bg-blue-400 text-white p-2 rounded w-full hover:bg-blue-600 transition duration-700"
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
}
