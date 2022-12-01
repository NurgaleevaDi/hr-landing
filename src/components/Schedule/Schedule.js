import React from 'react';

function Schedule() {
  return (
    <section className="schedule">
      <h2 className="schedule__title">Работайте удаленно и выбирайте график сами</h2>
      <ul className="schedule__list">
        <li className="schedule__points">
          <span className="schedule__span schedule__span_one">35 - 55 000 &#8381;</span>
          <p className="schedule__text">можно зарабатывать в месяц</p>
        </li>
        <li className="schedule__points">
          <span className="schedule__span schedule__span_two">50 человек</span>
          <p className="schedule__text">в группе</p>
        </li>
        <li className="schedule__points">
          <span className="schedule__span schedule__span_three">2-3 часа</span>
          <p className="schedule__text">работы в день</p>
        </li>
      </ul>
    </section>
  );
}
export default Schedule;
