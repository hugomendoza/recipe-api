import star from "../assets/img/star.svg";
import heart from "../assets/img/heart.svg";
import portion from "../assets/img/portion.svg";
import preparation from "../assets/img/preparation.svg";
import dificulty from "../assets/img/dificulty.svg";

interface PropsCard {
  title: string;
  image: string;
  servings: number,
  readyInMinutes: number;
}


export const CardRecipe = (props:PropsCard) => {

  const { title, image, servings, readyInMinutes } = props

  return (
    <>
      <article className="card">
        <figure className="card__figure">
          <img
            src={ image }
            alt={ title }
            className="card__image"
          />
        </figure>
        <div className="card__wrapper">
          <div className="card__data">
            <header className="card__header">
              <h3 className="subtitle">{ title }</h3>
            </header>
            <div className="flex justify-between">
              <div className="flex">
                <img
                  src={star}
                  alt="icono estrella"
                />
                <p>5.0</p>
              </div>
              <figure>
                <img
                  src={heart}
                  alt="icono corazón"
                />
              </figure>
            </div>
          </div>
          <ul className="card__features features">
            <li className="features__item">
              <img
                src={portion}
                alt="icono porción"
              />
              <h4  className="subtitle">Tamaño de la porción</h4>
              <p>{servings} raciones</p>
            </li>
            <li className="features__item">
              <img
                src={preparation}
                alt="icono preparación"
              />
              <h4 className="subtitle">Tiempo de la preparación</h4>
              <p>{readyInMinutes} minutos</p>
            </li>
            <li className="features__item">
              <img
                src={dificulty}
                alt="icono dificultad"
              />
              <h4 className="subtitle">Dificultad</h4>
              <p>Fácil</p>
            </li>
          </ul>
        </div>
      </article>
      
    </>
  )
}

export {}
