import "./NavBar.css"
import { Link } from "react-router"
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { LuTrophy } from "react-icons/lu";
import { FaCalendarAlt } from "react-icons/fa";

function NavBar() {
    return (
        <div className="nav-bar">
            <div className="nav-bar__item">
                <Link to="/" className="nav-bar__link">
                    <HiMiniSquares2X2 className="nav-bar__icon" />
                    <span className="nav-bar__text">Inicio</span>
                </Link>
            </div>

            <div className="nav-bar__item">
                <Link to="/records" className="nav-bar__link">
                    <LuTrophy className="nav-bar__icon" />
                    <span className="nav-bar__text">Records</span>
                </Link>
            </div>

             <div className="nav-bar__item">
                <Link to="/carreras-futuras" className="nav-bar__link">
                    <FaCalendarAlt className="nav-bar__icon" />
                    <span className="nav-bar__text">Carreras Futuras</span>
                </Link>
            </div>
        </div>
    )
}

export default NavBar
