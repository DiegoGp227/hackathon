interface loginProps {
  onClick: () => void;
}

export default function Login({ onClick }: loginProps) {
  return (
    <div className="flex justify-center items-center flex-col border-2 border-blue-200 rounded shadow-md w-[400px] h-[400px] p-9">
      <h1 className="text-2xl font-bold mb-4">Inicio de Sesión</h1>
      <form onSubmit={onClick} className="w-full gap-8 flex flex-col">
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
          <button type="submit" className="bg-blue-400 text-white p-2 rounded w-full hover:bg-blue-600 transition duration-700">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
