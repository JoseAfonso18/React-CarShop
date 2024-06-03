import React, { useState, useEffect } from 'react';
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

function Limpeza() {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {

    const dadosProdutos = [
      { id: 1, imagem: KitLimpeza, titulo: 'KIT VONIXX', descricao: 'Limpeza e Proteção para Rodas', preco: 'R$ 174,70' },
      { id: 2, imagem: Pretinho, titulo: 'PRETINHO VINTEX', descricao: 'Pneu Pretinho Vonixx 500ml', preco: 'R$ 10,80' },
      { id: 3, imagem: ToalhaFibra, titulo: 'TOALHA MICROFIBRA', descricao: '2 Lados Vonixx 40X40', preco: 'R$ 27,90' },
      { id: 4, imagem: Cerablend, titulo: 'CERA BLEND CARNAÚBA', descricao: 'Cera Vonixx Sílica Paste Wax (100ML)', preco: 'R$82,79' },
      { id: 5, imagem: Vflocvonixx, titulo: 'KIT SHAMPOO NEUTRO V-FLOC', descricao: 'Shampoo Vonixx + Toalha/Luva Microfibra', preco: 'R$ 105,90' },
      { id: 6, imagem: Kitpolimento, titulo: 'KIT POLIMENTO PROFISSIONAL', descricao: 'Politriz Rotativa 5" + V10 + V20 + V30', preco: 'R$ 1.588,83' },
      { id: 7, imagem: Politriz, titulo: 'POLITRIZ ROTO ORBITAL', descricao: 'PRV906 6 Pol. 900W - VONDER', preco: 'R$989,90' },
      { id: 8, imagem: Aromatizante, titulo: 'AROMATIZADOR LITTLE TREES', descricao: '3 Cheirinho Vanila + Black Ice + New Car', preco: 'R$ 45,22' },
      { id: 9, imagem: Snowfoan, titulo: 'SNOW FOAM', descricao: 'Canhão de Espuma Nação Detail', preco: 'R$ 399,99' },
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
                    <h5 className="card-title"><strong>{produto.preco}</strong></h5>
                    <a href="#" className="btn btn-primary">Comprar</a>
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
