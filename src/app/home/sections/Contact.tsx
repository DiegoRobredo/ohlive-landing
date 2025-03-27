import SectionContainer from "@/app/components/SectionContainer";

export default function Contact() {
  return (
    <SectionContainer sectionId="contact">
      <h2 className="text-3xl text-secondary font-bold">Contacto</h2>
      <p className="text-secondary">
        ¿Tienes alguna? Ponte en contacto con nosotros
      </p>
      <input
        className="bg-secondary w-full p-2 mt-2"
        placeholder="Tu email"
      ></input>
      <textarea
        className="bg-secondary w-full p-2 mt-2"
        placeholder="Tu mensaje"
      ></textarea>
      <button className="p-2 bg-secondary text-primary rounded-lg w-full text-xl">
        Enviar
      </button>
    </SectionContainer>
  );
}
