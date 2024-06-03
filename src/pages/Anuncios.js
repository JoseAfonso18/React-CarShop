import React, { useState, useEffect } from 'react';
import '../assets/css/estilo.css';
import Civic from "../assets/imagens/Civic.jpg";
import DogRam from "../assets/imagens/DogRam.jpg";
import Cruze from "../assets/imagens/Cruze.jpg";
import Gol from "../assets/imagens/Gol.jpg";
import Jetta from "../assets/imagens/Jetta.png";
import Sw4 from "../assets/imagens/Sw4.jpg";
import S10 from "../assets/imagens/S10.jpg";
import Opala from "../assets/imagens/Opala.jpg";
import Sonata from "../assets/imagens/Sonata.jpg";

function Anuncios() {
  
  const [anuncios, setAnuncios] = useState([]);

 
  useEffect(() => {
  
    const dadosAnuncios = [
      { id: 1, imagem: Civic, titulo: 'HONDA CIVIC', descricao: 'Honda Civic Sedan 1.6 i-VTEC-2021', preco: 'R$ 120.000' },
      { id: 2, imagem: DogRam, titulo: 'DODGE RAM', descricao: '3500 Laramie 6.7-2022', preco: 'R$ 459.990' },
      { id: 3, imagem: Cruze, titulo: 'CHEVROLET CRUZE', descricao: 'Cruze 1.4 Turbo LT 16V Flex 4P', preco: 'R$ 100.000' },
      { id: 4, imagem: Gol, titulo: 'VOLKSWAGEN GOL', descricao: 'Volkswagen Gol 1.6 MSI 8V 4P', preco: 'R$ 42.000' },
      { id: 5, imagem: Jetta, titulo: 'VOLKSWAGEN JETTA GLI', descricao: 'VW Jetta GLI 350 2.0 TSI 2021', preco: 'R$ 215.000' },
      { id: 6, imagem: Sw4, titulo: 'TOYOTA HILUX SW4', descricao: 'Sw4 2.8 D-4D Turbo Diesel Diamond', preco: 'R$ 480.000' },
      { id: 7, imagem: S10, titulo: 'CHEVROLET S10', descricao: 'Chevrolet S10 LTZ 2.8 Turbo Diesel 4x4', preco: 'R$ 240.000' },
      { id: 8, imagem: Opala, titulo: 'CHEVROLET OPALA', descricao: 'Chevrolet Opala Coupé 1975 6 Cil Turbo', preco: 'R$ 70.000' },
      { id: 9, imagem: Sonata, titulo: 'HYUNDAI SONATA', descricao: '2.7 GLS V6 24V 4P', preco: 'R$ 86.000' },
      
    ];

    
    setAnuncios(dadosAnuncios);
  }, []);

  return (
    <main>
      <section id="catalogo">
        <div className="container">
          <h2 className="section-title"><strong>Veículos</strong></h2>
          <div className="row">
            {anuncios.map((anuncio) => (
              <div className="col-lg-4 col-md-6" key={anuncio.id}>
                <div className="card">
                  <img src={anuncio.imagem} className="card-img-top" alt={anuncio.titulo} />
                  <div className="card-body">
                    <h5 className="card-title"><strong>{anuncio.titulo}</strong></h5>
                    <p className="card-text">{anuncio.descricao}</p>
                    <h5 className="card-title"><strong>{anuncio.preco}</strong></h5>
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

export default Anuncios;
