import logo from './logo.svg';
import './App.css';
import { Routes } from 'react-router-dom';
import Home from './Components/Home';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Vinyl } from './Components/Vinyl';

function App() {
  return (
    <div className="App">

   <nav>
    <Link to="/">Home</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Vinyl/:id" element={<Vinyl/>} />
    </Routes>

    </div>
  );
}

export default App;
