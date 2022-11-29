/* eslint-disable react/prop-types */
import React from 'react';
import chair from './images/chair.png';

function Tasks({ componentRef }) {
  return (
    <section className="tasks" ref={componentRef}>
      <div className="tasks__container tasks__container_first">
        <div className="tasks__info">
          <h2 className="tasks__title">Задачи наставника</h2>
          <p className="tasks__text">Оплата за ведение группы</p>
          <p className="tasks__text">&sim;35 000-50 000 &#8381; в месяц</p>
        </div>
        <ul className='tasks__list list'>
          <li className="tasks__item">Помогать студентам ставить цели, Рефлексировать и делать выводы</li>
          <li className="tasks__item">Отвечать на их вопросы в чате</li>
          <li className="tasks__item">Проводить вебинары 2 раза в месяц и давать обратную связь</li>
          <li className="tasks__item">Делиться опытом и мотивировать</li>
        </ul>
        <img className='tasks__image' src={chair} alt="Изображение кресла режиссера"></img>
        <button type="button" className="tasks__button button"><a className="tasks__link" href="#">К вакансиям наставников</a></button>
      </div>
      <div className="tasks__container tasks__container_second">
        <div className="tasks__info">
          <h2 className="tasks__title">Задачи ревьюера</h2>
          <p className="tasks__text">Оплата за каждое ревью</p>
          <p className="tasks__text">&sim;35 000-50 000&#8381; в месяц</p>
        </div>
        <ul className="tasks__list list">
          <li className="tasks__item">Проверять код и проекты студентов</li>
          <li className="tasks__item">Простыми словами объяснять им их ошибки</li>
          <li className="tasks__item">Давать корректирующую обратную связь</li>
          <li className="tasks__item">Оценивать работы - зачёт/незачёт</li>
        </ul>
        <img className='tasks__image' src={chair} alt="Изображение кресла режиссера"></img>
        <button type="button" className="tasks__button button"><a className="tasks__link" href="#">К вакансиям ревьюера</a></button>
      </div>

    </section>
  );
}

export default Tasks;
