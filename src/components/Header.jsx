import { PiSneakerMoveFill } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { LuSettings2 } from "react-icons/lu";
import { IoAdd } from "react-icons/io5";
import AddRaceModal from "./AddRaceModal";
import "./Header.css";

function Header({ filter, add }) {
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
        <button className="header__button header__button--filter" onClick={filter}>
          <LuSettings2 />
          Filtrar
        </button>

        <AddRaceModal onAdd={add}>
          <button className="header__button header__button--add">
            <IoAdd />
            Agregar Carrera
          </button>
        </AddRaceModal>
      </div>
    </header>
  );
}

export default Header;
