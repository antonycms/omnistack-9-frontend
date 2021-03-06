import React, { useState } from 'react';

import './Login.css';
import logo from '../../assets/logo.svg';
import api from '../../services/api';

export default function Login({ history }) {
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    if (!email) {
      return alert('Preencha o email');
    }

    try {
      const { data } = await api.post('/sessions', {
        email,
      });

      localStorage.setItem('userId', data.id);

      history.push('/dashboard');

    } catch (err) {
      console.log(err.message);
    }

  }

  return (
    <div className="app-container">
      <img src={logo} className="logo" alt="logo" />
      <form onSubmit={handleSubmit}>
        <p>
          Ofereca <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
          </p>
        <label htmlFor="email">E-MAIL *</label>
        <input
          id="email"
          type="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button type="submit">cadastrar</button>
      </form>
    </div>
  );
}
