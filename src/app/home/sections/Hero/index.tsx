import SectionContainer from "@/app/components/SectionContainer";
import "./styles.css";

export default function Hero() {
  return (
    <SectionContainer sectionId="hero" className="mt-16">
      <h1 className="text-4xl font-bold color-secondary">
        Tus muebles pueden estar en casa del cliente antes de que los compre.
        IKEA ya lo hace. ¿Y tú?
      </h1>
      <p>
        Haz que tus clientes vean tus muebles en su salón, su cocina o su
        dormitorio. Sin montajes. Sin Photoshop.
      </p>
      <p>
        Con nuestra app de realidad aumentada, conviertes su móvil en tu mejor
        vendedor. Vas a vender más, vas a recibir menos devoluciones… y vas a
        dejar de parecer la tienda de siempre. Porque si no te modernizas tú, lo
        hará la competencia.
      </p>
      <article className="card-class">
        <img
          src="./images/ohlive-mobile.png"
          alt="Móvil mostrando la app Ohlive"
        />
        <img
          src="./images/sofa_sin_fondo_basico.png"
          alt="Sofá sin fondo básico"
        />
      </article>
    </SectionContainer>
  );
}
