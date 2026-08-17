import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import Carta from "./components/Carta";
import UbicacionPage from "./pages/UbicacionPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/carta" element={<Carta />} />
        <Route path="/ubicacion" element={<UbicacionPage />} />
      </Route>
    </Routes>
  );
}
