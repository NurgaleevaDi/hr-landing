import React from 'react';
import cross from './images/cross.png';

function Expert() {
  return (
    <section className="expert">
      <div className="expert__intro">
        <h2 className="expert__title">Как стать экспертом?</h2>
        <img className="expert__cross" src={cross} alt="Дизайнерский крестик"/>
      </div>
      <div className="expert__puzzle">
        <div className="puzzle_one puzzle">
          <span className="expert__span">01</span>
          <p className="puzzle-text puzzle-text_one">Выберите роль и заполните&nbsp;заявку</p>
        </div>
        <div className="puzzle_two puzzle">
          <span className="expert__span ">02</span>
          <p className="puzzle-text">Пройдите отбор и&nbsp;бесплатное&nbsp;обучение</p>
        </div>
        <div className="puzzle_three puzzle">
          <span className="expert__span">03</span>
          <p className="puzzle-text">Начните делиться знаниями&nbsp;со&nbsp;студентами Яндекс&nbsp;Практикума</p>
        </div>
      </div>
   </section>
  );
}

export default Expert;
