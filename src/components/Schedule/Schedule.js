import React from 'react';

function Schedule() {
  return (
    <section className='schedule'>
      <h2 className='schedule__title'>Работайте удаленно и выбирайте график сами</h2>
      <ul className='schedule__list'>
        <li className='schedule__points'>
          Доход от<span className='schedule__span'> 35 </span>
          до<span className='schedule__span'> 55 </span>тысяч рублей в месяц
        </li>
        <li className='schedule__points'>
          В группе около<span className='schedule__span'> 50 </span>человек
        </li>
        <li className='schedule__points'>
          Работа по<span className='schedule__span'> 2-3 </span>часа в день
        </li>
      </ul>
    </section>
  );
}
export default Schedule;
