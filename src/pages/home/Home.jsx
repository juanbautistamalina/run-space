import Card from "../../components/Card"
import Button from "../../components/Button"
import "./Home.css"

function Home({ races, setCurrentFilter, onDeleteRace }) {

  const handleFilterChange = (filterType) => {
    setCurrentFilter(filterType);
  }

  return (
    <>
      <div className="btn-container">
        <Button onClick={() => handleFilterChange('all')}>Todas</Button>
        <Button onClick={() => handleFilterChange('5')}>5K</Button>
        <Button onClick={() => handleFilterChange('10')}>10K</Button>
        <Button onClick={() => handleFilterChange('21')}>21K</Button>
        <Button onClick={() => handleFilterChange('42')}>42K</Button>
        <Button onClick={() => handleFilterChange('ultra')}>Ultra</Button>
      </div>

      <div className="cards-container">
        {races.map(race =>
          <Card
            key={race.id}
            id={race.id}
            title={race.title}
            img={race.img}
            distance={race.distance}
            totalTime={race.totalTime}
            pace={race.pace}
            position={race.position}
            date={race.date}
            place={race.place}
            isPR={race.isPR}
            onDelete={onDeleteRace}
          />)
        }
      </div>
    </>
  )
}

export default Home
