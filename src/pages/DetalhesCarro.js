import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import Civic from "../assets/imagens/Civic.jpg";
import DogRam from "../assets/imagens/DogRam.jpg";
import Cruze from "../assets/imagens/Cruze.jpg";
import Gol from "../assets/imagens/Gol.jpg";
import Jetta from "../assets/imagens/Jetta.png";
import Sw4 from "../assets/imagens/Sw4.jpg";
import S10 from "../assets/imagens/S10.jpg";
import Opala from "../assets/imagens/Opala.jpg";
import Sonata from "../assets/imagens/Sonata.jpg";

const sliderItems = [
  { src: 'https://picsum.photos/id/678/1200/400', altText: 'Slide 1', caption: 'Slide 1', key: 1 },
  { src: 'https://picsum.photos/id/456/1200/400', altText: 'Slide 2', caption: 'Slide 2', key: 2 },
  { src: 'https://picsum.photos/id/678/1200/400', altText: 'Slide 3', caption: 'Slide 3', key: 3 },
];

function DetalhesCarro() {
  const { id } = useParams();
  const [carro, setCarro] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const dadosAnuncios = [
      { id: 1, imagem: Civic, titulo: 'HONDA CIVIC', descricao: '2.0 16V Flexone EX 4P CVT', preco: 'R$ 120.000', ano: 2021, km: 65.500, cor: 'Prata', motor: '1.6', cambio: 'Automático', portas: 4 },
      { id: 2, imagem: DogRam, titulo: 'DODGE RAM', descricao: '3500 Laramie 6.7-2022', preco: 'R$ 459.990', ano: 2022, km: 5000, cor: 'Preto', motor: '6.7', cambio: 'Automático', portas: 4 },
      { id: 3, imagem: Cruze, titulo: 'CHEVROLET CRUZE', descricao: 'Cruze 1.4 Turbo LT 16V Flex 4P', preco: 'R$ 100.000', ano: 2020, km: 15000, cor: 'Branco', motor: '1.4 Turbo', cambio: 'Automático', portas: 4 },
      { id: 4, imagem: Gol, titulo: 'VOLKSWAGEN GOL', descricao: 'Volkswagen Gol 1.6 MSI 8V 4P', preco: 'R$ 42.000', ano: 2018, km: 60000, cor: 'Vermelho', motor: '1.6', cambio: 'Manual', portas: 4 },
      { id: 5, imagem: Jetta, titulo: 'VOLKSWAGEN JETTA GLI', descricao: 'VW Jetta GLI 350 2.0 TSI 2021', preco: 'R$ 215.000', ano: 2021, km: 12000, cor: 'Cinza', motor: '2.0 TSI', cambio: 'Automático', portas: 4 },
      { id: 6, imagem: Sw4, titulo: 'TOYOTA HILUX SW4', descricao: 'Sw4 2.8 D-4D Turbo Diesel Diamond', preco: 'R$ 480.000', ano: 2021, km: 10000, cor: 'Branco', motor: '2.8 Diesel', cambio: 'Automático', portas: 4 },
      { id: 7, imagem: S10, titulo: 'CHEVROLET S10', descricao: 'Chevrolet S10 LTZ 2.8 Turbo Diesel 4x4', preco: 'R$ 240.000', ano: 2021, km: 15000, cor: 'Preto', motor: '2.8 Diesel', cambio: 'Automático', portas: 4 },
      { id: 8, imagem: Opala, titulo: 'CHEVROLET OPALA', descricao: '4.1 Comodoro SL/E 12V Gasolina 4P Manual', preco: 'R$ 105.000', ano: 1975, km: 80000, cor: 'Preto', motor: '6 Cil', cambio: 'Manual', portas: 4 },
      { id: 9, imagem: Sonata, titulo: 'HYUNDAI SONATA', descricao: '2.7 GLS V6 24V 4P', preco: 'R$ 86.000', ano: 2008, km: 90000, cor: 'Preto', motor: '2.7', cambio: 'Automático', portas: 4 },
    ];

    const carroEncontrado = dadosAnuncios.find(anuncio => anuncio.id === parseInt(id));
    setCarro(carroEncontrado);
  }, [id]);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === sliderItems.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? sliderItems.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = sliderItems.map((item) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
    >
      <img src={item.src} alt={item.altText} className="d-block w-100" />
      <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    </CarouselItem>
  ));

  if (!carro) return <p>Carro não encontrado.</p>;

  return (
    <div className="container detalhes-container mt-4">
      <div className="row">
        {/* Coluna do Slider */}
        <div className="col-lg-6 carousel-container">
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators items={sliderItems} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </div>

        {/* Coluna das Informações do Carro */}
        <div className="col-lg-6">
          <h2>{carro.titulo}</h2>
          <p className="text-muted">{carro.preco}</p>
          <h3>Especificações</h3>
          <ul>
            <li><strong>Ano:</strong> {carro.ano}</li>
            <li><strong>Quilometragem:</strong> {carro.km} km</li>
            <li><strong>Cor:</strong> {carro.cor}</li>
            <li><strong>Motor:</strong> {carro.motor}</li>
            <li><strong>Câmbio:</strong> {carro.cambio}</li>
            <li><strong>Portas:</strong> {carro.portas}</li>
          </ul>
          <h3>Descrição</h3>
          <p>{carro.descricao}</p>
          <button className="btn btn-primary mt-3">Comprar</button>
        </div>
      </div>
    </div>
  );
}

export default DetalhesCarro;
