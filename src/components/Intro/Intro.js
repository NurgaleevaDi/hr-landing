import React from 'react';

function Intro({ onRedirectButton, quiz }) {
  return (
      <section className="intro">
        <h1 className="intro__title">Стань частью команды Яндекс Практикума</h1>
        <p className="intro__text">Делись своим опытом в программировании, анализе данных, менеджменте, маркетинге или дизайне и получай дополнительный доход</p>
        <button className="intro__button" onClick={() => onRedirectButton(quiz)}>Хочу делиться знаниями</button>
      </section >
  );
}

export default Intro;
