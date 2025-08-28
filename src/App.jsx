import { Routes, Route } from "react-router"
import Layout from "./components/Layout"  
import Home from "./pages/home/Home"
import Records from "./pages/records/Records"
import CarrerasFuturas from "./pages/carrerasFuturas/CarrerasFuturas.jsx"
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/records" element={<Records />} />
        <Route path="/carreras-futuras" element={<CarrerasFuturas />} />
      </Route>
    </Routes>
  )
}

export default App
