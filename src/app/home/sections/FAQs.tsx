import SectionContainer from "@/app/components/SectionContainer";

export default function FAQs() {
  return (
    <SectionContainer sectionId="faqs">
      <h2 className="text-3xl">FAQs</h2>
      <h3 className="text-xl text-secondary">¿Qué es Ohlive?</h3>
      <p className="text-secondary">
        Ohlive es una aplicación que te permite ver en vivo cómo quedarían los
        muebles en tu hogar antes de comprarlos.
      </p>
      <h3 className="text-xl text-secondary">¿Cómo funciona?</h3>
      <p className="text-secondary">
        Ohlive utiliza la cámara de tu móvil para superponer los muebles en la
        estancia que desees.
      </p>
      <h3 className="text-xl text-secondary">¿Qué necesito para usar Ohlive?</h3>
      <p className="text-secondary">Solo necesitas un móvil con cámara y conexión a internet.</p>
      <h3 className="text-xl text-secondary">¿Qué necesito para tener Ohlive en mi tienda Online?</h3>
      <p className="text-secondary">
        Solo necesitas cargar tus modelos 3D en la plataforma de Ohlive y ya
        podrás disfrutar del visor de realidad aumentada en tu tienda.
      </p>
      <h3 className="text-xl text-secondary">No tengo modelos en 3D. ¿Qué hago?</h3>
      <p className="text-secondary">
        No te preocupes, nosotros tenemos un equipo de diseñadores que pueden
        ayudarte a generar tus modelos 3D
      </p>
      <h3 className="text-xl text-secondary">¿Cómo puedo tener Ohlive en mi tienda Online?</h3>
      <p className="text-secondary">
        Contáctanos a través de nuestro formulario de contacto y te ayudaremos a
        integrar Ohlive en tu tienda.
      </p>
    </SectionContainer>
  );
}
