import { useState } from "react"
import { Routes, Route } from "react-router"
import Layout from "./components/Layout"
import Home from "./pages/home/Home"
import Records from "./pages/records/Records"
import CarrerasFuturas from "./pages/carrerasFuturas/CarrerasFuturas.jsx"
import example1 from "./assets/example1.jpg"
import example2 from "./assets/example2.jpg"
import example3 from "./assets/example3.jpg"
import './App.css'

function App() {

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

  const handleFilterClick = () => {
    // Lógica para filtrar las carreras
  }

  const getDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };


  const handleAddClick = () => {
    const newRace = {
      id: data.length + 1,
      title: "Nueva Carrera",
      img: example1,
      distance: "10",
      totalTime: "0:00:00",
      pace: "0:00",
      position: 0,
      date: getDate(),
      place: "Desconocido",
      isPR: false
    };
    setData([...data, newRace]);
  }

  return (
    <Routes>
      <Route element={<Layout filter={handleFilterClick} add={handleAddClick} />}>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/records" element={<Records data={data} />} />
        <Route path="/carreras-futuras" element={<CarrerasFuturas data={data} />} />
      </Route>
    </Routes>
  )
}

export default App
