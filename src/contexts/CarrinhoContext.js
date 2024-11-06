import React, { createContext, useState } from 'react';

// Cria o contexto
export const CarrinhoContext = createContext();

// Provedor do contexto
export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  // Função para adicionar um item ao carrinho
  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prevCarrinho) => [...prevCarrinho, produto]);
  };

  // Calcula o total do carrinho
  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0).toFixed(2);
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarAoCarrinho, calcularTotal }}>
      {children}
    </CarrinhoContext.Provider>
  );
};
