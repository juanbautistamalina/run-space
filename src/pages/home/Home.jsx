import Card from "../../components/Card"
import Button from "../../components/Button"
import "./Home.css"

function Home({ data, setData, allData }) {

  const handleAll = () => {
    setData(allData);
  }

  const handle5K = () => {
    const filteredData = allData.filter(race => race.distance === "5");
    setData(filteredData);
  }

  const handle10K = () => {
    const filteredData = allData.filter(race => race.distance === "10");
    setData(filteredData);
  }

  const handle21K = () => {
    const filteredData = allData.filter(race => race.distance === "21");
    setData(filteredData);
  }

  const handle42K = () => {
    const filteredData = allData.filter(race => race.distance === "42");
    setData(filteredData);
  }

  const handleUltra = () => {
    const filteredData = allData.filter(race => race.distance > "42");
    setData(filteredData)
  }

  return (
    <>
      <div className="btn-container">
        <Button onClick={handleAll}>Todas</Button>
        <Button onClick={handle5K}>5K</Button>
        <Button onClick={handle10K}>10K</Button>
        <Button onClick={handle21K}>21K</Button>
        <Button onClick={handle42K}>42K</Button>
        <Button onClick={handleUltra}>Ultra</Button>
      </div>

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
