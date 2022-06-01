import logo from './logo.svg';
import './App.css';
import { Routes } from 'react-router-dom';
import Home from './Components/Home';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">

   <nav>
    <Link to="/Home">Home</Link>
    </nav>

    <Routes>
      <Route path="/Home" element={<Home/>} />
    </Routes>

    </div>
  );
}

export default App;
