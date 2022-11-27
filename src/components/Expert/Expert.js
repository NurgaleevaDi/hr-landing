import React from 'react';

function Expert() {
  return (
    <section className='expert'>
      <h2 className='expert__title'>Как стать экспертом?</h2>
      <div className='expert__puzzle'>
        <div className='puzzle-one'>
          <p className='puzzle-text'>Выберите роль и заполните заявку</p>
        </div>
        <div className='puzzle-two'>
          <p className='puzzle-text'>Пройдите отбор и бесплатное обучение</p>
        </div>
        <div className='puzzle-three'>
          <p className='puzzle-text'>Начните делиться знаниями со студентами Яндекс Практикума</p>
        </div>
      </div>
   </section>
  );
}

export default Expert;
