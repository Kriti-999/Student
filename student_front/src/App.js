import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path="/" exact element={<Register />} />
        <Route path="/home" element={<Home />} />



      </Routes>
    </div>
  );
}

export default App;
