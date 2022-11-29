import React, { useState } from 'react';
import Vacancie from './Vacancie/Vacancie';
import reviewers from './reviewers/vacancies';
import teachers from './teachers/vacancies';

const btns = ['Программирование', 'Аналитика', 'Дизайн', 'Маркетинг', 'Менеджмент',];
const profBtns = ['Для наставников', 'Для ревьюеров'];

function Vacancies() {
  const [btn, setBtn] = useState(0);
  const [profession, setProfession] = useState(0);

  function handleOnClick(index) {
    setBtn(index);
  }

  function handleProfessionOnClick(i) {
    setProfession(i);
  }

  return (
    <section className="vacancies">
      <h2 className="vacancies__title">Открытые вакансии</h2>
      <div className="vacancies__container">
        {profBtns.map((item, index) => <button key={index} className={`vacancies__button ${btn === index ? 'vacancies__button_active' : ''}`} onClick={() => handleOnClick(index)}>{item}</button>)}
      </div>
      <div className="vacancies__container vacancies__container_s">
        {btns.map((item, i) => <button key={i} className={`vacancies__button vacancies__button_s ${profession === i ? 'vacancies__button_active' : ''}`} id='Программирование' onClick={() => handleProfessionOnClick(i)}>{item}</button>)}
      </div>
      <div className="vacancies__grid">
        {(btn === 0 && profession === 0)
        && teachers.slice(0, 5).map((item, i) => <Vacancie key={i} {...item} />)}
        {(btn === 1 && profession === 0)
        && reviewers.slice(0, 5).map((item, i) => <Vacancie key={i} {...item} />)}
        {(btn === 0 && profession === 1)
        && teachers.slice(5, 9).map((item, i) => <Vacancie key={i} {...item} />)}
        {(btn === 1 && profession === 1)
        && reviewers.slice(5, 9).map((item, i) => <Vacancie key={i} {...item} />)}
      </div>
      <button className="vacancies__more-button">Смотреть вакансии</button>
    </section>
  );
}

export default Vacancies;
