import React, { useEffect } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.svg';

export default function Dashboard() {

  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem('user');
      const response = await api.get('/dashboard', {
        headers: { user_id }
      });

      console.log(response);
    }

    loadSpots();
  }, []);

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
