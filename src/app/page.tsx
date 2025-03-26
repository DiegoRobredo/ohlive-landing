import Hero from "@/app/home/sections/Hero";
import About from "@/app/home/sections/About";
import FAQs from "@/app/home/sections/FAQs";
import Contact from "@/app/home/sections/Contact";

export default function Home() {
  return (
    <main className="gap-8 mg-auto bg-primary">
      <Hero />
      <About />
      <FAQs />
      <Contact />
    </main>
  );
}
