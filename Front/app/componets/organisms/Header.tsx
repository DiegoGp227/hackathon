import Link from "next/dist/client/link";
import Image from "next/image";
import userImg from "@/public/userImg.png";
import pageImg from "@/public/pageImg.png";

export default function Header() {
  return (
    <header className="w-full h-16 bg-white flex items-center justify-around shadow-md">
      <div className="h-16 flex items-center cursor-pointer ">
        <Image src={pageImg} alt="Logo" width={50} height={15000} />
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
      <div className="h-16 flex items-center cursor-pointer ">
        <Image src={userImg} alt="User Image" width={50} height={50} />
      </div>
    </header>
  );
}
