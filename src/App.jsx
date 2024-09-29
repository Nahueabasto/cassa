import { HashRouter, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="flex">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
