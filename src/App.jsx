import { useState } from "react"
import { Routes, Route } from "react-router"
import { ThemeProvider } from "./contexts/ThemeContext"
import Layout from "./components/Layout"
import Home from "./pages/home/Home"
import Records from "./pages/records/Records"
import CarrerasFuturas from "./pages/carrerasFuturas/CarrerasFuturas.jsx"
import './App.css'

function App() {

  // Estado principal - contiene todos los datos originales
  const [allRaces, setAllRaces] = useState([
    {
      id: 1,
      title: "Carrera 10K",
      img: "/images/example1.jpg",
      distance: "10",
      totalTime: "0:41:40",
      pace: "4:10",
      position: 1,
      date: "2025-01-01",
      place: "Madrid",
      isPR: true
    },
    {
      id: 2,
      title: "Carrera 15K",
      img: "/images/example2.jpg",
      distance: "15",
      totalTime: "1:04:15",
      pace: "4:15",
      position: 25,
      date: "2025-05-22",
      place: "Barcelona",
      isPR: false
    },
    {
      id: 3,
      title: "Media Maratón 21K",
      img: "/images/example3.jpg",
      distance: "21",
      totalTime: "1:34:30",
      pace: "4:30",
      position: 8,
      date: "2025-03-25",
      place: "Valencia",
      isPR: true
    }
  ]);

  // Estado para el filtro actual aplicado
  const [currentFilter, setCurrentFilter] = useState('all');

  // Estado para la búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleAddRace = (newRace) => {
    setAllRaces(prev => [...prev, newRace]);
  }

  const handleDeleteRace = (raceId) => {
    setAllRaces(prev => prev.filter(race => race.id !== raceId));
  }

  const handleEditRace = (updatedRace) => {
    setAllRaces(prev => prev.map(race =>
      race.id === updatedRace.id ? updatedRace : race
    ));
  }

  // Función para obtener datos filtrados basados en el filtro actual y búsqueda
  const getFilteredRaces = () => {
    let filteredRaces = allRaces;

    // Aplicar filtro por distancia
    switch (currentFilter) {
      case '5':
        filteredRaces = filteredRaces.filter(race => parseFloat(race.distance) === 5);
        break;
      case '10':
        filteredRaces = filteredRaces.filter(race => parseFloat(race.distance) === 10);
        break;
      case '21':
        filteredRaces = filteredRaces.filter(race => parseFloat(race.distance) === 21);
        break;
      case '42':
        filteredRaces = filteredRaces.filter(race => parseFloat(race.distance) === 42);
        break;
      case 'ultra':
        filteredRaces = filteredRaces.filter(race => parseFloat(race.distance) > 42);
        break;
      default:
        // No filtrar por distancia
        break;
    }

    // Aplicar filtro de búsqueda por nombre
    if (searchTerm.trim()) {
      filteredRaces = filteredRaces.filter(race =>
        race.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredRaces;
  }

  return (
    <ThemeProvider>
      <Routes>
        <Route element={<Layout add={handleAddRace} onSearch={handleSearch} />}>
          <Route path="/" element={<Home
            races={getFilteredRaces()}
            setCurrentFilter={setCurrentFilter}
            onDeleteRace={handleDeleteRace}
            onEditRace={handleEditRace}
          />} />
          <Route path="/records" element={<Records data={allRaces} />} />
          <Route path="/carreras-futuras" element={<CarrerasFuturas data={allRaces} />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
