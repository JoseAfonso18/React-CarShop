import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CarrinhoProvider } from './contexts/CarrinhoContext'; // Importa o CarrinhoProvider
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pecas from './pages/Peças';
import Anuncios from './pages/Anuncios';
import Limpeza from './pages/Limpeza';
import Login from './pages/Login';
import Cadastro from './components/Cadastro';
import Anunciar from './pages/Anunciar';
import GerenciarVendas from './pages/GerenciarVendas';
import DetalhesCarro from './pages/DetalhesCarro';
import './assets/css/estilo.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  return (
    <CarrinhoProvider> {/* Envolve toda a aplicação com o CarrinhoProvider */}
      <Router>
        <div>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pecas" element={<Pecas />} />
              <Route path="/anuncios" element={<Anuncios />} />
              <Route path="/detalhes/:id" element={<DetalhesCarro />} />
              <Route path="/limpeza" element={<Limpeza />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/anunciar" element={<Anunciar />} />
              <Route path="/gerenciarvendas" element={<GerenciarVendas />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CarrinhoProvider>
  );
};

export default App;
