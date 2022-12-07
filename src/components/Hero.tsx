import background from "../assets/img/background-banner.jpg";

export const Hero = () => {
  return (
    <section className="hero flex">
      <img
        src={background}
        alt="Recetas para todos"
        className="hero__background"
      />
      <header className="hero__header">
        <h1 className="hero__title title">Recetas <span>para todos</span></h1>
      </header>
    </section>
  )
}
export {}