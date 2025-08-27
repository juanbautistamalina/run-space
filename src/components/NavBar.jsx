import "./NavBar.css"
import { Link } from "react-router"
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { LuTrophy } from "react-icons/lu";

function NavBar() {
    return (
        <div className="nav-bar">
            <div className="nav-bar__item">
                <Link to="/">
                    <HiMiniSquares2X2 />
                    Inicio
                </Link>
            </div>

            <div className="nav-bar__item">
                <Link to="/records">
                    <LuTrophy />
                    Records
                </Link>
            </div>
        </div>
    )
}

export default NavBar