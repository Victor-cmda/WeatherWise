import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">Sobre a API de Monitoramento do Clima</h1>
      <p className="about-text">
        Nossa aplicação utiliza a poderosa API de monitoramento do clima para fornecer informações
        atualizadas sobre as condições climáticas em todo o mundo.
      </p>
      <p className="about-text">
        A API de monitoramento do clima oferece acesso a dados precisos e em tempo real, incluindo
        informações sobre temperatura, umidade, velocidade do vento, previsões futuras e muito mais.
        Esses dados são essenciais para ajudar você a se preparar para as condições climáticas em
        qualquer lugar que esteja.
      </p>
      <p className="about-text">
        Nossa equipe de especialistas em meteorologia trabalha continuamente para garantir que
        estejamos fornecendo as informações mais confiáveis e atualizadas para manter você informado
        sobre o clima em sua região e em todo o mundo.
      </p>
    </div>
  );
}

export default About;
