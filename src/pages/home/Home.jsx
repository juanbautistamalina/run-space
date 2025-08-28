import { useState } from "react"
import Card from "../../components/Card"
import "./Home.css"
import example1 from "../../assets/example1.jpg"
import example2 from "../../assets/example2.jpg"
import example3 from "../../assets/example3.jpg"

function Home() {

  const [data, setData] = useState([
    {
      id: 1,
      title: "Carrera 10K",
      img: example1,
      distance: "10",
      totalTime: "0:41:40", // 10 km × 4:10 min/km
      pace: "4:10",
      position: 1,
      date: "2025-01-01",
      place: "Madrid",
      isPR: true
    },
    {
      id: 2,
      title: "Carrera 15K",
      img: example2,
      distance: "15",
      totalTime: "1:04:15", // 15 km × 4:15 min/km
      pace: "4:15",
      position: 25,
      date: "2025-05-22",
      place: "Barcelona",
      isPR: false
    },
    {
      id: 3,
      title: "Media Maratón 21K",
      img: example3,
      distance: "21",
      totalTime: "1:34:30", // 21 km × 4:30 min/km
      pace: "4:30",
      position: 8,
      date: "2025-03-25",
      place: "Valencia",
      isPR: true
    }
  ]);

  return (
    <>
      <div className="cards-container">
        {data.map(race =>
          <Card
            key={race.id}
            title={race.title}
            img={race.img}
            distance={race.distance}
            totalTime={race.totalTime}
            pace={race.pace}
            position={race.position}
            date={race.date}
            place={race.place}
            isPR={race.isPR} />)
        }
      </div>
    </>
  )
}

export default Home