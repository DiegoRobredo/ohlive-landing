import MenuButton from "./MenuButton";
import Link from "next/link";
import Img from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 w-full backdrop-blur p-6 mx-auto z-2">
      <nav className="flex flex-row justify-between items-center">
        <Link href="/#">
          <Img
            src="/images/ohlive-logo-recortada.webp"
            alt="Ohlive logo"
            width="100"
            height={100}
          />
        </Link>
        <div className="hidden sm:flex flex-row gap-4 items-center align-middle">
          <Link href="/#about">About</Link>
          <Link href="/#faqs">FAQs</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <MenuButton />
      </nav>
    </header>
  );
}
