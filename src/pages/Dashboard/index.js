import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './Dashboard.css';
import logo from '../../assets/logo.svg';

export default function Dashboard() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const id = localStorage.getItem('userId');

      const response = await api.get('/spots', {
        headers: { id }
      });

      setSpots(response.data);
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
          {spots.map(spot => (
            <div key={spot._id} id="spot">
              <img src={spot.thumbnail} alt="" />
              <h6>Rocketseat</h6>
              <p>R$ {spot.price}</p>
            </div>
          ))}
        </div>
        <button type="submit">cadastrar</button>
      </form>
    </div>
  );
}
