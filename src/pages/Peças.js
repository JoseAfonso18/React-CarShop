import React, { useState, useEffect } from 'react';
import '../assets/css/estilo.css';
import Orbital from '../assets/imagens/Orbital.png';
import Filtroesportivo from '../assets/imagens/Filtroesportivo.png';
import SuspensaoRosca from '../assets/imagens/SuspensãoRosca.png';
import Bicosinjetores from '../assets/imagens/Bicosinjetores.png';
import BombadeCombustivel from '../assets/imagens/Bomba de Combustivel.png';
import Led from '../assets/imagens/Led.png';
import Pneu from '../assets/imagens/Pneu.png';
import Velasignicao from '../assets/imagens/Velasignição.png';
import Bateria from '../assets/imagens/Bateria.png';


function Pecas() {
 
  const [pecas, setPecas] = useState([]);

  useEffect(() => {
    
    const dadosPecas = [
      { id: 1, imagem: Orbital, titulo: 'JOGO DE RODA ORBITAL', descricao: 'Jogo 4 Rodas Orbital - Aro 17', preco: 'R$ 2.899,00' },
      { id: 2, imagem: Filtroesportivo, titulo: 'FILTRO ESPORTIVO', descricao: 'Filtro 3 Polegadas Flexível Mono Fluxo', preco: 'R$ 150,00' },
      { id: 3, imagem: SuspensaoRosca, titulo: 'SUSPENSÃO A ROSCA', descricao: 'Sport Spin KIT Dianteiro', preco: 'R$ 722,21' },
      { id: 4, imagem: Bicosinjetores, titulo: 'BICOS INJETORES', descricao: 'Bosch 80 Lbs/h 280 158 209', preco: 'R$ 1.584,00' },
      { id: 5, imagem: BombadeCombustivel, titulo: 'BOMBA DE COMBUSTÍVEL', descricao: 'Para Carros Carburados à Gasolina', preco: 'R$ 139,88' },
      { id: 6, imagem: Led, titulo: 'KIT LAMPADA SUPER LED', descricao: 'H4 6000k Bivolt - H4', preco: 'R$ 77,90' },
      { id: 7, imagem: Pneu, titulo: 'JOGO DE PNEU 265-70', descricao: 'R16 Goodrich Bf All Terrain', preco: 'R$ 2.192,80' },
      { id: 8, imagem: Velasignicao, titulo: 'JOGO DE VELAS DE IGNIÇÃO', descricao: 'Toyota Paseo 1.5i 16v 91/95', preco: 'R$ 102,82' },
      { id: 9, imagem: Bateria, titulo: 'BATERIA MOURA', descricao: '100Ah M100QD', preco: 'R$ 809,00' },
    ];

    setPecas(dadosPecas);
  }, []);

  return (
    <main>
      <section id="catalogo">
        <div className="container">
          <h2 className="section-title"><strong>Peças</strong></h2>
          <div className="row">
            {pecas.map((peca) => (
              <div className="col-lg-4 col-md-6" key={peca.id}>
                <div className="card">
                  <img src={peca.imagem} className="card-img-top" alt={peca.titulo} />
                  <div className="card-body">
                    <h5 className="card-title"><strong>{peca.titulo}</strong></h5>
                    <p className="card-text">{peca.descricao}</p>
                    <h5 className="card-title"><strong>{peca.preco}</strong></h5>
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

export default Pecas;
