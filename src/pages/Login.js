import React from 'react';
import '../assets/css/estilo.css';
import Logo from "../assets/imagens/Logo Site.png"

function Login() {
  return (
    <div className="main-login">
      <div className="left-login">
        <h1>Faça Login<br />e entre para nossa Equipe</h1>
        <img src={Logo} className="left-login-img" alt="Logo site" />
      </div>
      <div className="right-login">
        <div className="card-login">
          <h1>LOGIN</h1>
          <div className="textfield">
            <label htmlFor="usuario">Usuário</label>
            <input type="text" name="usuario" placeholder="Usuário" />
          </div>
          <div className="textfield">
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" placeholder="Senha" />
          </div>
          <button className="btn-login">Login</button>
          <div className="links-login">
            <a href="#" className="link-senha">Esqueceu a Senha</a>
            <a href="#" className="link-cadastro">Cadastrar-se</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
