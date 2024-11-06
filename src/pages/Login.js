import React, { useState } from 'react';
import '../assets/css/estilo.css';
import Logo from "../assets/imagens/Logo Site.png";
import { auth, googleProvider } from '../firebaseConfig'; 
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, usuario, senha);
      console.log("Login com e-mail/senha bem-sucedido");
      // Redirecionar para a página desejada após o login
      window.location.href = '/home'; // Altere isso para a página principal após o login
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("Login com Google bem-sucedido");
      window.location.href = '/home'; // Altere isso para a página principal após o login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="main-login">
      <div className="left-login">
        <h1>Faça Login<br />e entre para nossa Equipe</h1>
        <img src={Logo} className="left-login-img" alt="Logo site" />
      </div>
      <div className="right-login">
        <div className="card-login">
          <h1>LOGIN</h1>
          {error && <p className="error">{error}</p>}
          <div className="textfield">
            <label htmlFor="usuario">Usuário</label>
            <input 
              type="text" 
              name="usuario" 
              placeholder="Usuário" 
              value={usuario} 
              onChange={(e) => setUsuario(e.target.value)} 
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
            />
          </div>
          <button className="btn-login" onClick={handleLogin}>Login</button>
          <button className="btn-google" onClick={handleGoogleLogin}>Login com Google</button>
          <div className="links-login">
            <a href="/cadastro" className="link-cadastro">Cadastrar-se</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
