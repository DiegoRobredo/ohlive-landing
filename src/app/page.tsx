import Hero from "@/app/home/sections/Hero";
import StoryTelling from "@/app/home/sections/StoryTelling";
import FAQs from "@/app/home/sections/FAQs";
import Contact from "@/app/home/sections/Contact";

export default function Home() {
  return (
    <main className="gap-8 mg-auto bg-primary">
      <Hero />
      <StoryTelling />
      <FAQs />
      <Contact />
    </main>
  );
}
