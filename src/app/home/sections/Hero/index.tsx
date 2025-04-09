import SectionContainer from "@/app/components/SectionContainer";
import MobileCard from "./Card";
import ARViewer from "@/app/components/ARViewer";

export default function Hero() {
  return (
    <SectionContainer sectionId="hero">
      <h1 className="text-4xl font-bold text-secondary">
        Tus muebles pueden estar{" "}
        <span className="font-extrabold">
          en casa del cliente antes de que los compre
        </span>
        . IKEA ya lo hace. ¿Y tú?
      </h1>
      <p className="mt-4 text-secondary">
        Haz que tus clientes vean tus muebles en su salón, su cocina o su
        dormitorio. <span className="font-bold">Sin montajes</span>.{" "}
        <span className="font-bold">Sin Photoshop</span>.
      </p>
      <MobileCard />
      {/* <p className="mt-2">
        Con nuestra app de realidad aumentada, conviertes su móvil en tu mejor
        vendedor. Vas a vender más, vas a recibir menos devoluciones… y vas a
        dejar de parecer la tienda de siempre. Porque si no te modernizas tú, lo
        hará la competencia.
      </p> */}
      <button className="p-2 bg-secondary text-primary rounded-lg w-full text-xl">
        Pruébalo gratis
      </button>
    </SectionContainer>
  );
}
