import React from 'react';

function Contacts(props) {
  return (
    <div className="contacts">
      <h2>Контакты</h2>
      <p>Мы готовы выслушать и обсудить любое интересное предложение.<br />
      Пишите, будем рады пообщаться!</p>
      <a href="https://google.ru/" target="_blank" className="btn btn-primary btn-block" rel="noreferrer">Написать нам</a>
    </div>
  );
}

export default Contacts;