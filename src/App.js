import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pecas from './pages/Peças';
import Anuncios from './pages/Anuncios';
import Limpeza from './pages/Limpeza';
import Login from './pages/Login';
import './assets/css/estilo.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pecas" element={<Pecas />} />
            <Route path="/anuncios" element={<Anuncios />} />
            <Route path="/limpeza" element={<Limpeza />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
