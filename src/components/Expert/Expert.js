import React from 'react';
import first from './images/puzzle-one.png';
import second from './images/puzzle-two.png';
import third from './images/puzzle-three.png';

function Expert() {
  return (
    <section className="expert">
      <h2 className="expert__title">Как стать экспертом?</h2>
      <div className="expert__puzzle">
        <div className="puzzle_one puzzle">
          <img src={first} alt="Первый пазл" />
          {/* <span className="expert__span">01</span>
          <p className="puzzle-text">Выберите роль и заполните заявку</p> */}
        </div>
        <div className="puzzle_two puzzle">
          <img src={second} alt="Второй пазл" />
          {/* <span className="expert__span ">02</span>
          <p className="puzzle-text">Пройдите отбор и бесплатное обучение</p> */}
        </div>
        <div className="puzzle_three puzzle">
          <img src={third} alt="Третий пазл" />
          {/* <span className="expert__span">03</span>
          <p className="puzzle-text">Начните делиться знаниями со студентами
           Яндекс Практикума</p> */}
        </div>
      </div>
   </section>
  );
}

export default Expert;
