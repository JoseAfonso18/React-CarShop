import React, { useContext, useState } from 'react';
import '../assets/css/estilo.css';
import Logo from "../assets/imagens/Logo Site.png";
import Lupa from "../assets/imagens/Lupa.png";
import CarrinhoIcon from "../assets/imagens/CarrinhoCompras.png"; // Ícone do carrinho
import { CarrinhoContext } from '../contexts/CarrinhoContext'; // Importa o contexto do carrinho

const Header = () => {
  const { carrinho } = useContext(CarrinhoContext); // Usa o contexto para acessar o carrinho
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);

  // Função para calcular o total do carrinho
  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0).toFixed(2);
  };

  // Função para alternar a visualização do carrinho
  const toggleCarrinho = () => {
    setMostrarCarrinho(!mostrarCarrinho);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light fixed-top navbar-transparente">
        <div className="container">
          <a href="/Home" className="navbar-brand">
            <img src={Logo} width="200" alt="Logo" />
          </a>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#nav-principal">
            <i className="fas fa-bars text-white"></i>
          </button>
          <div className="search-box">
            <input type="text" className="search-txt" placeholder="Buscar Carros ou Peças" />
            <a href="#" className="search-btn">
              <img src={Lupa} alt="Lupa" height="20" width="20" />
            </a>
          </div>
          
          {/* Carrinho de compras */}
          <div className="carrinho-container">
            <img src={CarrinhoIcon} alt="Carrinho" className="carrinho-icon" onClick={toggleCarrinho} />
            {mostrarCarrinho && (
              <div className="carrinho-dropdown">
                {carrinho.length === 0 ? (
                  <p>O carrinho está vazio.</p>
                ) : (
                  <div>
                    {carrinho.map((item, index) => (
                      <div key={index} className="carrinho-item">
                        <p>{item.titulo} - {item.quantidade}x</p>
                        <p>R$ {(item.preco * item.quantidade).toFixed(2)}</p>
                      </div>
                    ))}
                    <div className="carrinho-total">
                      <strong>Total: R$ {calcularTotal()}</strong>
                    </div>
                    <a href="/carrinho" className="btn btn-primary">Ver Carrinho Completo</a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
      <nav id="menu-h">
        <ul>
          <li className="dropdown">
            <a href="/">Menu</a>
          </li>
          <li className="dropdown">
            <a href="/anunciar">Vender</a>
            <div className="dropdown-peças">
              <a href="">Vender Veiculos</a>
              <a href="/gerenciarvendas">Gerenciar Minhas Vendas</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="/pecas">Peças</a>
            <div className="dropdown-peças">
              <a href="">Motor</a>
              <a href="">Câmbio</a>
              <a href="">Embreagem</a>
              <a href="">Suspensão</a>
              <a href="">Carroceria</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="/anuncios">Veiculos</a>
            <div className="dropdown-peças">
              <a href="">Novos</a>
              <a href="">Usados</a>
              <a href="">Carros</a>
              <a href="">Motos</a>
              <a href="">Caminhões</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="/limpeza">Cuidado Automotivo</a>
            <div className="dropdown-peças">
              <a href="">Limpeza</a>
              <a href="">Polimento</a>
              <a href="">Luvas e Microfibra</a>
              <a href="">Ceras</a>
              <a href="">Interno</a>
              <a href="">Externo</a>
            </div>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
