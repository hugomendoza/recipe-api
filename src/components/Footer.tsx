import imgFooter from "../assets/img/img-footer.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__back"></div>
      <div className="container flex flex-wrap items-center relative">
        <p className="subtitle footer__text">Con el patrocinio de</p>
        <figure className="footer__figure">
          <img
            src={imgFooter}
            alt="Productos app"
            className="footer__image"
          />
        </figure>
      </div>
    </footer>
  )
}

export {}
