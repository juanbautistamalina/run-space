import { PiSneakerMoveFill } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import "./Header.css"

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        <PiSneakerMoveFill />
        Run Space
      </h1>

      <div className="header__input-container">
        <input className="header__input" placeholder="Buscar carreras..." />
        <CiSearch className="header__input-icon" />
      </div>

      <button className="header__button">Agregar</button>
    </header>
  )
}

export default Header