import React, { useState, useMemo } from 'react';
import api from '../../services/api';

import imgCamera from '../../assets/camera.svg'
import './New.css';

export default function New({ history }) {
  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(event) {
    event.preventDefault();
    const user = localStorage.getItem('userId');
    const data = new FormData();

    data.append('file', thumbnail);
    data.append('price', (price ? price : 0));
    data.append('techs', techs);
    data.append('user', user);
    data.append('company', company);

    await api.post('/spots', data);

    history.push('/dashboard')
  }

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit} id="container-new">

        <label htmlFor="select-img">IMAGEM *</label>
        <label id="thumbnail" style={{ backgroundImage: `url(${preview})` }} htmlFor="file">
          <input
            type="file"
            id="file"
            onChange={event => setThumbnail(event.target.files[0])}
          />
          <img src={imgCamera} alt="select img" />
        </label>

        <label htmlFor="empresa">EMPRESA *</label>
        <input
          id="empresa"
          type="text"
          placeholder="Digite o nome da sua empresa"
          value={company}
          onChange={event => setCompany(event.target.value)}
        />

        <label htmlFor="tecnologias">TECNOLOGIAS * <span>(Separados por virgula)</span></label>
        <input
          id="tecnologias"
          type="text"
          placeholder="Quais tecnologias usam por ai?"
          value={techs}
          onChange={event => setTechs(event.target.value)}
        />

        <label htmlFor="valor">VALOR DA DIARIA <span>(Em branco para GRATUITO)</span></label>
        <input
          id="valor"
          type="number"
          placeholder="Valor cobrado por dia de trabalho"
          value={price}
          onChange={event => setPrice(event.target.value)}
        />

        <button type="submit">CRIAR</button>
      </form>
    </div>
  );
}
