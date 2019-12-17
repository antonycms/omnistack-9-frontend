import React from 'react';

import './Login.css';
import logo from '../../assets/logo.svg'

export default function Login() {
  return (
    <div className="login-container">
      <img src={logo} alt="logo" />
      <form action="">
        <p>
          Ofereca <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
          </p>
        <label htmlFor="email">E-MAIL *</label>
        <input id="email" type="text" placeholder="Seu melhor e-mail" />
        <button type="submit">cadastrar</button>
      </form>
    </div>
  );
}
