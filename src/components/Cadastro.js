// src/pages/Cadastro.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate
import '../assets/css/estilo.css';
import { auth } from '../firebaseConfig'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Inicializa o useNavigate

  const handleCadastro = async (e) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      console.log("Cadastro bem-sucedido");
      navigate('/login'); // Usando navigate para redirecionar para a página de login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="main-login">
      <div className="left-login">
        <h1>Crie sua Conta<br />e junte-se a nós</h1>
      </div>
      <div className="right-login">
        <div className="card-login">
          <h1>CADASTRO</h1>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleCadastro}>
            <div className="textfield">
              <label htmlFor="nome">Nome</label>
              <input 
                type="text" 
                name="nome" 
                placeholder="Nome" 
                value={nome} 
                onChange={(e) => setNome(e.target.value)} 
                required 
              />
            </div>
            <div className="textfield">
              <label htmlFor="email">E-mail</label>
              <input 
                type="email" 
                name="email" 
                placeholder="E-mail" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="textfield">
              <label htmlFor="senha">Senha</label>
              <input 
                type="password" 
                name="senha" 
                placeholder="Senha" 
                value={senha} 
                onChange={(e) => setSenha(e.target.value)} 
                required 
              />
            </div>
            <div className="textfield">
              <label htmlFor="telefone">Telefone (opcional)</label>
              <input 
                type="tel" 
                name="telefone" 
                placeholder="Telefone" 
                value={telefone} 
                onChange={(e) => setTelefone(e.target.value)} 
              />
            </div>
            <button className="btn-login" type="submit">Cadastrar</button>
          </form>
          <div className="links-login">
            <a href="/login" className="link-cadastro">Já tem uma conta? Faça Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
