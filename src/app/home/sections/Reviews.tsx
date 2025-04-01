import SectionContainer from "@/app/components/SectionContainer";

export default function Reviews() {
  return (
    <SectionContainer sectionId="reviews">
      <h3 className="text-2xl text-secondary">
        💬 Ya lo están usando, y funciona así de bien:
      </h3>
      <p className="text-secondary">
        “Cuando un cliente ve el sofá en su salón, ya no pregunta si le va a
        gustar. Solo pregunta si llega rápido.”
      </p>
      <p className="text-secondary">
        — Marta, dueña de una tienda de muebles en Valencia
      </p>
      <h3 className="text-2xl text-secondary">
        ❗ “Yo no tengo la necesidad de esto...”
      </h3>
      <p className="text-secondary">No todavía.</p>
      <p className="text-secondary">
        Pero tus competidores ya lo están probando.
      </p>
      <p className="text-secondary">
        Y cuando un cliente compare tu tienda con la suya…
      </p>
      <p className="text-secondary">¿A quién crees que va a comprar?</p>
    </SectionContainer>
  );
}
