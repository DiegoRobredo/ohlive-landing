import MenuButton from "./MenuButton";

export default function Header() {
  return (
    <header className="fixed top-0 w-full backdrop-blur py-6 px-4 mx-auto">
      <nav className="flex flex-row justify-between items-center">
        <a href="/#">
          <img src="/images/ohlive-logo-recortada.webp" alt="Ohlive logo" />
        </a>
        <div className="hidden sm:flex flex-row gap-4 items-center align-middle">
          <a href="/#about">About</a>
          <a href="/#faqs">FAQs</a>
          <a href="/#contact">Contact</a>
        </div>
        <MenuButton />
      </nav>
    </header>
  );
}
