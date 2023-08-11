import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contato</h1>
      <div className="contact-content">
        <div className="contact-info">
          <p>
            Tem alguma pergunta ou feedback? Não hesite em nos contatar. Estamos aqui para
            ajudar e responder a todas as suas perguntas relacionadas ao clima.
          </p>
          <p>
            Email: victor21420@gmail.com
            <br />
            Telefone: (45) 98406-3065
          </p>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" name="name" className='contact_input' />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" className='contact_input'/>
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem:</label>
              <textarea className='form-message' id="message" name="message" rows="4"></textarea>
            </div>
            <button type="submit" className="submit-button">Enviar</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;
