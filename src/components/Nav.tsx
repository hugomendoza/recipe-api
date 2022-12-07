import { useState } from 'react';
import menuBurger from "../assets/img/icon-burger.png";

export const Nav = () => {

  const [open, setOpen] = useState(false)

  const links = [
    {
      name: "Home",
      active: true
    },
    {
      name: "Vegetarianos",
      active: false
    },
    {
      name: "Platos Principales",
      active: false
    },
    {
      name: "Tartas",
      active: false
    },
    {
      name: "Comida rápida",
      active: false
    },
    {
      name: "Menú niños",
      active: false
    },
    {
      name: "Sopas",
      active: false
    }
  ]

  const onOpenMenu = () => {
    !open ? setOpen(true) : setOpen(false)
  }

  return (
    <nav className="nav">
      <div className="container flex">
        <a
          href="/"
          className="nav__brand"
        >
          <h2>Recipe<span>App</span></h2>
        </a>
        <ul className={`nav__menu flex ${open ? "nav__menu--active" : ""}`} >
          {
            links.map((e) => (
              <li
                key={e.name}
                className="nav__item"
              >
                <a
                  href="/"
                  className={`nav__link ${e.active ? "nav__link--active" : ""}`}
                >
                  {e.name}
                </a>
              </li>
            ))
          }
        </ul>
        <button
          className="nav__burger"
          onClick={onOpenMenu}
        >
          <img
            src={menuBurger}
            alt="icono menu"
          />
        </button>
      </div>
    </nav>
  )
}

export {}