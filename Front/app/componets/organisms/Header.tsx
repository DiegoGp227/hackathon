import Link from "next/dist/client/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full h-16 bg-white flex items-center justify-around shadow-md">
      <div>
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>
      <div>
        <ul className="flex gap-5">
          <li>
            <Link href="/about">Inicio</Link>
          </li>
          <li>
            <Link href="/about"></Link>
          </li>
          <li>
            <Link href="/about">Ir a About</Link>
          </li>
        </ul>
      </div>
      <div>
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>
    </header>
  );
}
