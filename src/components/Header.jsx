import { PiSneakerMoveFill } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { IoAdd } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import "./Header.css"

function handleFilterClick() {
  // Lógica para filtrar las carreras
}

function handleAddClick() {
  // Lógica para agregar una nueva carrera
}

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

      <div className="header__button-container">
        <button className="header__button" onClick={handleFilterClick}>
          <LuSettings2 />
          Filtrar
        </button>
        <button className="header__button" onClick={handleAddClick}>
          <IoAdd />
          Agregar Carrera
        </button>
      </div>
    </header>
  )
}

export default Header