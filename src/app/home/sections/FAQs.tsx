import SectionContainer from "@/app/components/SectionContainer";

type FAQ = {
  id: string;
  title: string;
  description: string;
};

type FAQs = FAQ[];

const aoFaqs: FAQs = [
  {
    id: "1",
    title: "¿Qué es Ohlive?",
    description:
      "Ohlive es una aplicación que te permite ver en vivo cómo quedarían los muebles en tu hogar antes de comprarlos."
  },
  {
    id: "2",
    title: "¿Cómo funciona?",
    description:
      "Ohlive utiliza la cámara de tu móvil para superponer los muebles en la estancia que desees."
  },
  {
    id: "3",
    title: "¿Qué necesito para usar Ohlive?",
    description: "Solo necesitas un móvil con cámara y conexión a internet."
  },
  {
    id: "4",
    title: "¿Qué necesito para tener Ohlive en mi tienda Online?",
    description:
      "Solo necesitas cargar tus modelos 3D en la plataforma de Ohlive y ya podrás disfrutar del visor de realidad aumentada en tu tienda."
  },
  {
    id: "5",
    title: "No tengo modelos en 3D. ¿Qué hago?",
    description:
      "No te preocupes, nosotros tenemos un equipo de diseñadores que pueden ayudarte a generar tus modelos 3D."
  },
  {
    id: "6",
    title: "¿Cómo puedo tener Ohlive en mi tienda Online?",
    description:
      "Contáctanos a través de nuestro formulario de contacto y te ayudaremos a integrar Ohlive en tu tienda."
  }
];

export default function FAQs() {
  return (
    <SectionContainer sectionId="faqs">
      <h2 className="text-3xl font-bold text-secondary">FAQs</h2>
      <ul className="mt-4">
        {aoFaqs.map((faq) => (
          <li key={faq.id} className="p-4 border-b-2 border-b-secondary mb-4">
            <h3 className="text-xl font-bold text-secondary">{faq.title}</h3>
            <p className="mt-2 hidden text-secondary">{faq.description}</p>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}
