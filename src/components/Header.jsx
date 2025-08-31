import { PiSneakerMoveFill } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { IoAdd } from "react-icons/io5";
import AddRaceModal from "./AddRaceModal";
import ThemeToggle from "./ThemeToggle";
import "./Header.css";

function Header({ add }) {
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
        <ThemeToggle />
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
