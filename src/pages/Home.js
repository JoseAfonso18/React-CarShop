import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../assets/css/estilo.css';
import Uno from "../assets/imagens/Carro1.jpg";
import Fusca from "../assets/imagens/Fuscão.jpg";
import Astra from "../assets/imagens/Astra.jpg";
import Turbina from "../assets/imagens/Turbina.png";
import Embreagem from "../assets/imagens/Kitembreagem.png";
import Volante from "../assets/imagens/PeçasVolante.png";

const Home = () => {
  const [veiculos, setVeiculos] = useState([]);
  const [pecas, setPecas] = useState([]);

  useEffect(() => {
    const dadosVeiculos = [
      { id: 1, imagem: Uno, titulo: 'FIAT UNO', descricao: 'Mille Fire Economy 1.0 Manual Flex', preco: 'R$ 20.000' },
      { id: 2, imagem: Fusca, titulo: 'VOLKSWAGEN FUSCA', descricao: '1.5 8V Gasolina 2P Manual', preco: 'R$ 12.000' },
      { id: 3, imagem: Astra, titulo: 'CHEVROLET ASTRA', descricao: '2.0 Elegance Manual - 2006', preco: 'R$ 28.000' },
    ];

    const dadosPecas = [
      { id: 1, imagem: Turbina, titulo: 'TURBINA - R594', descricao: 'Turbina Master Power', preco: 'R$ 2.950,00' },
      { id: 2, imagem: Embreagem, titulo: 'KIT EMBREAGEM LUK', descricao: 'Fiorino-Palio-Siena-Strada-Uno', preco: 'R$ 458,00' },
      { id: 3, imagem: Volante, titulo: 'VOLANTE FTR', descricao: 'Volante Fuel Tech Universal', preco: 'R$ 797,00' },
    ];

    setVeiculos(dadosVeiculos);
    setPecas(dadosPecas);
  }, []);

  return (
    <div>
      
      <section id="busca-veiculos">
        <div className="container">
          <h2 className="section-title">Encontre seu Veículo</h2>
          <form id="form-busca" className="d-flex flex-wrap justify-content-between">
            <div className="form-group">
              <label htmlFor="tipo">Tipo:</label>
              <select id="tipo" name="tipo">
                <option value="">Selecione</option>
                <option value="veiculo">Veículo</option>
                <option value="pecas">Peças</option>
                <option value="cuidados">Cuidados Automotivos</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="estado">Estado:</label>
              <select id="estado" name="estado">
                <option value="">Selecione</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="cidade">Cidade:</label>
              <input type="text" id="cidade" name="cidade" placeholder="Digite a cidade" />
            </div>
            <div className="form-group">
              <label htmlFor="marca">Marca:</label>
              <input type="text" id="marca" name="marca" placeholder="Digite a marca" />
            </div>
            <div className="form-group">
              <label htmlFor="modelo">Modelo:</label>
              <input type="text" id="modelo" name="modelo" placeholder="Digite o modelo" />
            </div>
            <div className="form-group">
              <label htmlFor="ano">Ano:</label>
              <input type="text" id="ano" name="ano" placeholder="Digite o ano" />
            </div>
            <div className="form-group">
              <label htmlFor="cor">Cor:</label>
              <input type="text" id="cor" name="cor" placeholder="Digite a cor" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Buscar</button>
            </div>
          </form>
        </div>
      </section>
      
      <section id="catalogo-veiculos">
        <div className="container">
          <h2 className="section-title"><strong>Carros em Destaque</strong></h2>
          <div className="row">
            {veiculos.map((veiculo) => (
              <div className="col-lg-4 col-md-6" key={veiculo.id}>
                <div className="card">
                  <img src={veiculo.imagem} className="card-img-top" alt={veiculo.titulo} />
                  <div className="card-body">
                    <h5 className="card-title"><strong>{veiculo.titulo}</strong></h5>
                    <p className="card-text">{veiculo.descricao}</p>
                    <h5 className="card-title"><strong>{veiculo.preco}</strong></h5>
                    <a href="#" className="btn btn-primary">Comprar</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="catalogo-pecas">
        <div className="container">
          <h2 className="section-title"><strong>Peças em Destaque</strong></h2>
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
    </div>
  );
};

export default Home;
