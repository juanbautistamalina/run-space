import Card from "../../components/Card"
import "./Home.css"


function Home({ data }) {
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