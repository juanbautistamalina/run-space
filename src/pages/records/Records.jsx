import Card from "../../components/Card";
import "./Records.css";

function Records({ data }) {
  // Filtramos solo las carreras que son récord personal
  const filteredRaces = data.filter(race => race.isPR);

  return (
    <div className="cards-container">
      {filteredRaces.map(race => (
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
          isPR={race.isPR}
        />
      ))}
    </div>
  );
}

export default Records;
