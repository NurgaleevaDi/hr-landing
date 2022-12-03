/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Vacancie from './Vacancie/Vacancie';
import reviewers from './reviewers/vacancies';
import teachers from './teachers/vacancies';
import Empty from './empty/Empty';

const btns = ['Программирование', 'Аналитика', 'Дизайн', 'Маркетинг', 'Менеджмент',];
const profBtns = ['Наставники', 'Ревьюеры'];

function Vacancies({ componentRef }) {
  const nastavniki = teachers.slice(0, 6);
  const revieweri = reviewers.slice(0, 6);
  const moreTeachers = teachers.slice(6, 12);
  const moreReviewers = reviewers.slice(6, 12);
  const [btn, setBtn] = useState(0);
  const [profession, setProfession] = useState(0);
  const [teachersArr, setTeachersArr] = useState(nastavniki);
  const [reviewersArr, setReviewersArr] = useState(revieweri);

  function handleOnClick(index) {
    setBtn(index);
    setTeachersArr(nastavniki);
    setReviewersArr(revieweri);
  }

  function handleProfessionOnClick(i) {
    setProfession(i);
    setTeachersArr(nastavniki);
    setReviewersArr(revieweri);
  }

  const handleMore = () => {
    setTeachersArr([...nastavniki, ...moreTeachers]);
    setReviewersArr([...revieweri, ...moreReviewers]);
  };

  // eslint-disable-next-line consistent-return, no-unused-vars
  const handleFilters = () => {
    if (btn === 0 && profession === 0) {
      return teachersArr.map((item, i) => <Vacancie key={i} {...item} />);
    }
    if (btn === 1 && profession === 0) {
      return reviewersArr.map((item, i) => <Vacancie key={i} {...item} />);
    }
    if (btn === 0 && profession === 1) {
      return teachers.slice(12, 17).map((item, i) => <Vacancie key={i} {...item} />);
    }
    if (btn === 1 && profession === 1) {
      return reviewers.slice(12, 16).map((item, i) => <Vacancie key={i} {...item} />);
    }
    if (profession > 1) return <Empty />;
  };

  return (
    <section className="vacancies" ref={componentRef}>
      <h2 className="vacancies__title">Сотрудничество</h2>
      <div className="vacancies__container">
        {profBtns.map((item, index) => <button key={index} className={`vacancies__button ${btn === index ? 'vacancies__button_active' : ''}`} onClick={() => handleOnClick(index)}>{item}</button>)}
      </div>
      <div className="vacancies__overflow">
        <div className="vacancies__container vacancies__container_s">
          {btns.map((item, i) => <button key={i} className={`vacancies__button_s ${profession === i ? 'vacancies__button_s_active' : ''}`} id='Программирование' onClick={() => handleProfessionOnClick(i)}>{item}</button>)}
        </div>
      </div>
      <div className={profession > 1 ? 'vacancies__flex' : 'vacancies__grid'}>
          {handleFilters()}
      </div>
      {(profession > 1 || teachersArr.length === 12) || profession === 1 ? null : <button onClick={handleMore} className="vacancies__more-button">Смотреть все предложения</button>}
    </section>
  );
}

export default Vacancies;
