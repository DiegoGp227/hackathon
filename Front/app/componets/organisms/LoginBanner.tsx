export default function LoginBanner() {
  return (
    <div className="flex justify-start">
      <div className="w-[400px] flex justify-start items-center flex-col gap-5">
        <h1 className="text-4xl font-bold">¡Hola de Nuevo!</h1>
        <h2 className="text-xl">Nos alegra verte de nuevo</h2>
        <p className="text-center">
          ¿Listo para hacer algo increíble hoy? Inicia sesión y encuentra el
          plan perfecto.
        </p>
      </div>
    </div>
  );
}
