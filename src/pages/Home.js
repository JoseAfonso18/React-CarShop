import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../assets/css/estilo.css';
import Uno from "../assets/imagens/Carro1.jpg"
import Fusca from "../assets/imagens/Fuscão.jpg"
import Astra from "../assets/imagens/Astra.jpg"
import Turbina from "../assets/imagens/Turbina.png"
import Embreagem from "../assets/imagens/Kitembreagem.png"
import Volante from "../assets/imagens/PeçasVolante.png"

const Home = () => {
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
      <section id="catalogo">
        <div className="container">
          <h2 className="section-title"><strong>Carros em Destaque</strong></h2>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <img src={Uno} className="card-img-top" alt="Carro 1" />
                <div className="card-body">
                  <h5 className="card-title"><strong>FIAT UNO</strong></h5>
                  <p className="card-text">Mille Fire Economy 1.0 Manual Flex </p>
                  <h5 className="card-title"><strong>R$ 20.000</strong></h5>
                  <a href="#" className="btn btn-primary">Comprar</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <img src={Fusca} className="card-img-top" alt="Carro 2" />
                <div className="card-body">
                  <h5 className="card-title"><strong>VOLKSWAGEN FUSCA</strong></h5>
                  <p className="card-text">1.5 8V Gasolina 2P Manual</p>
                  <h5 className="card-title"><strong>R$ 12.000</strong></h5>
                  <a href="#" className="btn btn-primary">Comprar</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <img src={Astra} className="card-img-top" alt="Carro 3" />
                <div className="card-body">
                  <h5 className="card-title"><strong>CHEVROLET ASTRA</strong></h5>
                  <p className="card-text">2.0 Elegance Manual - 2006</p>
                  <h5 className="card-title"><strong>R$ 28.000</strong></h5>
                  <a href="#" className="btn btn-primary">Comprar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="catalogo">
        <div className="container">
          <h2 className="section-title"><strong>Peças em Destaque</strong></h2>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <img src={Turbina} className="card-img-top" alt="Carro 1" />
                <div className="card-body">
                  <h5 className="card-title"><strong>TURBINA - R594</strong></h5>
                  <p className="card-text">Turbina Master Power.</p>
                  <h5 className="card-title"><strong>R$ 2.950,00</strong></h5>
                  <a href="#" className="btn btn-primary">Comprar</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <img src={Embreagem} className="card-img-top" alt="Carro 2" />
                <div className="card-body">
                  <h5 className="card-title"><strong>KIT EMBREAGEM LUK</strong></h5>
                  <p className="card-text">Fiorino-Palio-Siena-Strada-Uno</p>
                  <h5 className="card-title"><strong>R$ 458,00</strong></h5>
                  <a href="#" className="btn btn-primary">Comprar</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <img src={Volante} className="card-img-top" alt="Carro 3" />
                <div className="card-body">
                  <h5 className="card-title"><strong>VOLANTE FTR</strong></h5>
                  <p className="card-text">Volante Fuel Tech Universal.</p>
                  <h5 className="card-title"><strong>R$ 797,00</strong></h5>
                  <a href="#" className="btn btn-primary">Comprar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

