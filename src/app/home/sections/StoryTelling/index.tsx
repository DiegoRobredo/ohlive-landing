import SectionContainer from "@/app/components/SectionContainer";
import Path from "./Path";

export default function About() {
  return (
    <SectionContainer sectionId="about">
      <div className="absolute">
        <Path fill="#ffffff" />
      </div>
      <h2 className="text-3xl text-secondary">
        Vende más mostrando cómo quedarían en casa
      </h2>
      <p className="text-secondary">
        Realidad aumentada sencilla, rápida y con efecto “wow”
      </p>
      <h3 className="text-2xl text-secondary mt-6">
        Tus fotos no venden tanto como podrían
      </h3>
      <p className="text-secondary mt-2">
        Tus muebles se ven bien en las fotos.
      </p>
      <p className="text-secondary">Pero cuando el cliente los recibe…</p>
      <p className="text-secondary">“No me imaginaba que quedara así.”</p>
      <p className="text-secondary">
        Y ahí vienen las dudas. Las devoluciones. Las pérdidas.
      </p>
      <p className="text-secondary">Y tú pensando:</p>
      <p className="text-secondary">
        “¿Cómo puede ser que con tanto esfuerzo… acabe devolviéndolo?”
      </p>
      <h3 className="text-2xl text-secondary mt-6">
        🚀 La app que pone tus muebles en el salón del cliente
      </h3>

      <p className="text-secondary">
        Nuestra aplicación de realidad aumentada convierte cualquier móvil en un
        probador de muebles.
      </p>
      <p className="text-secondary">El cliente apunta con la cámara…</p>
      <p className="text-secondary">
        Y ve tus productos en su casa. En tiempo real.
      </p>
      <p className="text-secondary">Sin imaginar. Sin errores.</p>
      <p className="text-secondary">
        Así suben las ventas, bajan las devoluciones, y tu tienda se pone a
        jugar en otra liga.
      </p>
      <p className="text-secondary">La de los grandes.</p>
      <h3 className="text-2xl text-secondary mt-6">
        💬 Ya lo están usando, y funciona así de bien:
      </h3>
      <p className="text-secondary">
        “Cuando un cliente ve el sofá en su salón, ya no pregunta si le va a
        gustar. Solo pregunta si llega rápido.”
      </p>
      <p className="text-secondary">
        — Marta, dueña de una tienda de muebles en Valencia
      </p>
      <h3 className="text-2xl text-secondary mt-6">
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
