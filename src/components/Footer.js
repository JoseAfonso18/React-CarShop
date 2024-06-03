import React from 'react';
import '../assets/css/estilo.css';


const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2024 Car Shop. Todos os direitos reservados.</p>
        <div className="social-icons ">
        <a href="#" class="btn btn-danger">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="#" class="btn btn-primary">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="#" class="btn btn-info">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="#" class="btn btn-primary">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="#" class="btn btn-secondary">
          <i class="fa-brands fa-github"></i>
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
