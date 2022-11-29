import React, { useState } from 'react';
import Vacancie from './Vacancie/Vacancie';

function Vacancies() {
  const [isClicked, setIsClicked] = useState(true);
  const [profession, setProfession] = useState('Программирование');

  function handleOnClick() {
    setIsClicked(!isClicked);
  }

  function handleProfessionOnClick(e) {
    setProfession(e.target.id);
  }

  return (
    <section className="vacancies">
      <h2 className="vacancies__title">Открытые вакансии</h2>
      <div className="vacancies__container">
        <button className={`vacancies__button ${isClicked ? '' : 'vacancies__button_disabled'}`} onClick={handleOnClick}>Для наставников</button>
        <button className={`vacancies__button ${isClicked ? 'vacancies__button_disabled' : ''}`} onClick={handleOnClick}>Для ревьюеров</button>
      </div>
      <div className="vacancies__container vacancies__container_s">
        <button className={`vacancies__button vacancies__button_s ${profession === 'Программирование' ? '' : 'vacancies__button_disabled'}`} id='Программирование' onClick={handleProfessionOnClick}>Программирование</button>
        <button className={`vacancies__button vacancies__button_s ${profession === 'Аналитика' ? '' : 'vacancies__button_disabled'}`} id='Аналитика' onClick={handleProfessionOnClick}>Аналитика данных</button>
        <button className={`vacancies__button vacancies__button_s ${profession === 'Дизайн' ? '' : 'vacancies__button_disabled'}`} id='Дизайн' onClick={handleProfessionOnClick}>Дизайн</button>
        <button className={`vacancies__button vacancies__button_s ${profession === 'Маркетинг' ? '' : 'vacancies__button_disabled'}`} id='Маркетинг' onClick={handleProfessionOnClick}>Маркетинг</button>
        <button className={`vacancies__button vacancies__button_s ${profession === 'Менеджмент' ? '' : 'vacancies__button_disabled'}`} id='Менеджмент' onClick={handleProfessionOnClick}>Менеджмент</button>
      </div>
      <div className="vacancies__grid">
        <Vacancie />
        <Vacancie />
        <Vacancie />
        <Vacancie />
        <Vacancie />
        <Vacancie />
      </div>
      <button className="vacancies__more-button">Смотреть вакансии</button>
    </section>
  );
}

export default Vacancies;
