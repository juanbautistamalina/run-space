import { LuTrophy } from "react-icons/lu";
import { TbEditCircle } from "react-icons/tb";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoIosPodium } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import "./Card.css"

function Card({ title, img, distance, totalTime, pace, position, date, place, isPR }) {
    return (
        <div className="card">
            {img && <img src={img} alt={title} className="card__img" />}

            <div className="card__info">
                <h2 className="card__title">{title}</h2>
                <p className="card__distance">{distance} km</p>
            </div>

            <div className="card__stats">
                <div className="card__total-time">
                    <p className="card__total-time-label">Tiempo Total</p>
                    <p className="card__total-time-value">{totalTime} {isPR ? <LuTrophy className="card__trophy" /> : ""}</p>
                </div>
                <div className="card__pace">
                    <p className="card__pace-label">Ritmo</p>
                    <p className="card__pace-value">{pace}</p>
                </div>
            </div>

            <hr className="card__divider" />

            <div className="card__additional-info">
                <div className="card__position">
                    <IoIosPodium className="card__position-icon" />
                    <p className="card__position-value">{position}</p>
                </div>

                <div className="card__date">
                    <CiCalendar className="card__date-icon" />
                    <p className="card__date-value">{date}</p>
                </div>

                <div className="card__place">
                    <FaLocationDot className="card__place-icon" />
                    <p className="card__place-value">{place}</p>
                </div>
            </div>

            <div className="card__actions">
                <RiDeleteBin6Fill />
                <TbEditCircle />
            </div>
        </div>
    )
}

export default Card
