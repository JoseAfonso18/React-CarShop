// src/pages/Anunciar.js
import React, { useState } from 'react';

const Anunciar = () => {
  const [carData, setCarData] = useState({
    marca: '',
    modelo: '',
    ano: '',
    preco: '',
    km: '',
    descricao: '',
    imagens: [] // Armazena as imagens carregadas
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData({ ...carData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 5); // Limita a 5 imagens
    setCarData({ ...carData, imagens: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para salvar os dados do veículo, incluindo as imagens
    console.log('Dados do Veículo:', carData);
  };

  return (
    <div className="anunciar-container">
      <form className="anunciar-form" onSubmit={handleSubmit}>
        <h2>Anunciar Veículo</h2>

        <div className="form-group full-width">
          <label htmlFor="marca">Marca</label>
          <input
            type="text"
            id="marca"
            name="marca"
            placeholder="Ex: Toyota"
            value={carData.marca}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="modelo">Modelo</label>
            <input
              type="text"
              id="modelo"
              name="modelo"
              placeholder="Ex: Corolla"
              value={carData.modelo}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="ano">Ano</label>
            <input
              type="number"
              id="ano"
              name="ano"
              placeholder="Ex: 2020"
              value={carData.ano}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="preco">Preço</label>
            <input
              type="number"
              id="preco"
              name="preco"
              placeholder="Ex: 45000"
              value={carData.preco}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="km">Quilometragem</label>
            <input
              type="number"
              id="km"
              name="km"
              placeholder="Ex: 30000"
              value={carData.km}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            name="descricao"
            placeholder="Descreva o veículo aqui..."
            value={carData.descricao}
            onChange={handleChange}
          />
        </div>

        <div className="form-group full-width">
          <label htmlFor="imagens">Fotos do Veículo (até 5 fotos)</label>
          <input
            type="file"
            id="imagens"
            name="imagens"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
          {carData.imagens.length > 0 && (
            <p>{carData.imagens.length} imagens selecionadas</p>
          )}
        </div>

        <button type="submit">Anunciar</button>
      </form>
    </div>
  );
};

export default Anunciar;
