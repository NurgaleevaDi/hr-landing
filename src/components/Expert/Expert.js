import React from 'react';

function Expert() {
  return (
    <section className="expert">
      <h2 className="expert__title">Как стать экспертом?</h2>
      <div className="expert__puzzle">
        <div className="puzzle_one puzzle">
          <span className="expert__span">01</span>
          <p className="puzzle-text">Выберите роль и заполните заявку</p>
        </div>
        <div className="puzzle_two puzzle">
          <span className="expert__span ">02</span>
          <p className="puzzle-text">Пройдите отбор и бесплатное обучение</p>
        </div>
        <div className="puzzle_three puzzle">
          <span className="expert__span">03</span>
          <p className="puzzle-text">Начните делиться знаниями со студентами Яндекс Практикума</p>
        </div>
      </div>
   </section>
  );
}

export default Expert;
