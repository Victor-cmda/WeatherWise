import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Bem-vindo ao WeatherWise</h1>
        <p>Explore nosso conteúdo incrível e descubra novas experiências.</p>
        <button className="cta-button">Saiba Mais</button>
      </div>
      <div className="home-gif">
        <img src="/Blue Cloud Illustration Tech Logo (1).gif" alt="GIF Animado" loading="lazy" />
      </div>
    </div>
  );
}

export default Home;
