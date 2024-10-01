import { HashRouter, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Cabañas from './pages/Cabañas';
import Galeria from './pages/Galeria';
import Reservas from './pages/Reservas';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="flex">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/servicios" element={<Servicios />} />
          <Route exact path="/cabañas" element={<Cabañas />} />
          <Route exact path="/galeria" element={<Galeria />} />
          <Route exact path="/reservas" element={<Reservas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
