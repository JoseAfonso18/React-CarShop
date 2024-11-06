import React, { useContext, useState, useEffect } from 'react';
import '../assets/css/estilo.css';
import KitLimpeza from "../assets/imagens/Kitlimpeza.png";
import Pretinho from "../assets/imagens/Pretinho.png";
import ToalhaFibra from "../assets/imagens/ToalhaFibra.png";
import Cerablend from "../assets/imagens/Cerablend.png";
import Vflocvonixx from "../assets/imagens/Vflocvonixx.png";
import Kitpolimento from "../assets/imagens/Kitpolimento.png";
import Politriz from "../assets/imagens/Politriz.png";
import Aromatizante from "../assets/imagens/Aromatizante.png";
import Snowfoan from "../assets/imagens/Snowfoan.png";
import { CarrinhoContext } from '../contexts/CarrinhoContext';

function Limpeza() {
  const { adicionarAoCarrinho } = useContext(CarrinhoContext); // Usa o contexto do carrinho
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const dadosProdutos = [
      { id: 1, imagem: KitLimpeza, titulo: 'KIT VONIXX', descricao: 'Limpeza e Proteção para Rodas', preco: 174.70 },
      { id: 2, imagem: Pretinho, titulo: 'PRETINHO VINTEX', descricao: 'Pneu Pretinho Vonixx 500ml', preco: 10.80 },
      { id: 3, imagem: ToalhaFibra, titulo: 'TOALHA MICROFIBRA', descricao: '2 Lados Vonixx 40X40', preco: 27.90 },
      { id: 4, imagem: Cerablend, titulo: 'CERA BLEND CARNAÚBA', descricao: 'Cera Vonixx Sílica Paste Wax (100ML)', preco: 82.79 },
      { id: 5, imagem: Vflocvonixx, titulo: 'KIT SHAMPOO NEUTRO V-FLOC', descricao: 'Shampoo Vonixx + Toalha/Luva Microfibra', preco: 105.90 },
      { id: 6, imagem: Kitpolimento, titulo: 'KIT POLIMENTO PROFISSIONAL', descricao: 'Politriz Rotativa 5" + V10 + V20 + V30', preco: 1588.83 },
      { id: 7, imagem: Politriz, titulo: 'POLITRIZ ROTO ORBITAL', descricao: 'PRV906 6 Pol. 900W - VONDER', preco: 989.90 },
      { id: 8, imagem: Aromatizante, titulo: 'AROMATIZADOR LITTLE TREES', descricao: '3 Cheirinho Vanila + Black Ice + New Car', preco: 45.22 },
      { id: 9, imagem: Snowfoan, titulo: 'SNOW FOAM', descricao: 'Canhão de Espuma Nação Detail', preco: 399.99 },
    ];

    setProdutos(dadosProdutos);
  }, []);

  return (
    <main>
      <section id="catalogo">
        <div className="container">
          <h2 className="section-title"><strong>Cuidado Automotivo</strong></h2>
          <div className="row">
            {produtos.map((produto) => (
              <div className="col-lg-4 col-md-6" key={produto.id}>
                <div className="card">
                  <img src={produto.imagem} className="card-img-top" alt={produto.titulo} />
                  <div className="card-body">
                    <h5 className="card-title"><strong>{produto.titulo}</strong></h5>
                    <p className="card-text">{produto.descricao}</p>
                    <h5 className="card-title"><strong>R$ {produto.preco.toFixed(2)}</strong></h5>
                    <button
                      onClick={() => adicionarAoCarrinho(produto)}
                      className="btn btn-primary"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Limpeza;
