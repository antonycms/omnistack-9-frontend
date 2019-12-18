import React, { useEffect } from 'react';
import api from '../../services/api';

import './Dashboard.css';
import logo from '../../assets/logo.svg';
import spotExample from '../../assets/spot-example.jpeg'

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
        <p>Ofereca <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>
        <div id="btn-container">
          <a href="/" style={{ "color": "green" }}>Aceitar</a>
          <a href="/" style={{ "color": "red" }}>Recusar</a>
        </div>
        <div id="container-spots">
          <div id="spot-left">
            <img src={spotExample} alt="" />
            <h6>Rocketseat</h6>
            <p>R$ 0,00</p>
          </div>
          <div id="spot-right">
            <img src={spotExample} alt="" />
            <h6>Dev City</h6>
            <p>R$ 20,00</p>
          </div>
        </div>
        <button type="submit">cadastrar</button>
      </form>
    </div>
  );
}
