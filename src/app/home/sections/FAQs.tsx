import SectionContainer from "@/app/components/SectionContainer";
import { faqs } from "@/app/consts/faqs";

export default function FAQs() {
  return (
    <SectionContainer sectionId="faqs">
      <h2 className="text-3xl font-bold text-secondary">FAQs</h2>
      <ul className="mt-4">
        {faqs.map((faq) => (
          <li key={faq.id} className="p-4 border-b-2 border-b-secondary mb-4">
            <h3 className="text-xl font-bold text-secondary">{faq.title}</h3>
            <p className="mt-2 hidden text-secondary">{faq.description}</p>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}
