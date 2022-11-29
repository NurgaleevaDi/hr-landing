import React, { useState } from 'react';
import Vacancie from './Vacancie/Vacancie';
import reviewers from './reviewers/vacancies';
import teachers from './teachers/vacancies';
import Empty from './empty/Empty';

const btns = ['Программирование', 'Аналитика', 'Дизайн', 'Маркетинг', 'Менеджмент',];
const profBtns = ['Наставники', 'Ревьюеры'];

function Vacancies({ componentRef }) {
  const [btn, setBtn] = useState(0);
  const [profession, setProfession] = useState(0);

  function handleOnClick(index) {
    setBtn(index);
  }

  function handleProfessionOnClick(i) {
    setProfession(i);
  }

  // eslint-disable-next-line consistent-return, no-unused-vars
  const handleFilters = () => {
    if (btn === 0 && profession === 0) {
      return teachers.slice(0, 6).map((item, i) => <Vacancie key={i} {...item} />);
    }
    if (btn === 1 && profession === 0) {
      return reviewers.slice(0, 6).map((item, i) => <Vacancie key={i} {...item} />);
    }
    if (btn === 0 && profession === 1) {
      return teachers.slice(5, 9).map((item, i) => <Vacancie key={i} {...item} />);
    }
    if (btn === 1 && profession === 1) {
      return reviewers.slice(5, 9).map((item, i) => <Vacancie key={i} {...item} />);
    }
    if (profession > 1) return <Empty />;
  };

  console.log(`${btn} btn`);
  console.log(`${profession} profession`);

  return (
    <section className="vacancies" ref={componentRef}>
      <h2 className="vacancies__title">Открытые вакансии</h2>
      <div className="vacancies__container">
        {profBtns.map((item, index) => <button key={index} className={`vacancies__button ${btn === index ? 'vacancies__button_active' : ''}`} onClick={() => handleOnClick(index)}>{item}</button>)}
      </div>
      <div className="vacancies__container vacancies__container_s">
        {btns.map((item, i) => <button key={i} className={`vacancies__button_s ${profession === i ? 'vacancies__button_s_active' : ''}`} id='Программирование' onClick={() => handleProfessionOnClick(i)}>{item}</button>)}
      </div>
      <div className={profession > 1 ? 'vacancies__flex' : 'vacancies__grid'}>
          {handleFilters()}
      </div>
      {profession > 1 ? null : <button className="vacancies__more-button">Смотреть вакансии</button>}
    </section>
  );
}

export default Vacancies;
