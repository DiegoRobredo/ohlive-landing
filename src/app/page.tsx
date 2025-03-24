import Hero from "@/app/home/sections/Hero";
import About from "@/app/home/sections/About";
import FAQs from "@/app/home/sections/FAQs";
import Contact from "@/app/home/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 mg-auto h-svh bg-[#f89645]">
      <Hero />
      <About />
      <FAQs />
      <Contact />
    </main>
  );
}
