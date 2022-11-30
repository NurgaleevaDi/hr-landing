/* eslint-disable react/prop-types */
import React from 'react';
import chair from './images/chair.png';
import glasses from './images/glasses.png';

function Tasks({ componentRef }) {
  return (
    <section className="tasks" ref={componentRef}>
      <div className="tasks__container tasks__container_first">
        <h2 className="tasks__title">Задачи наставника</h2>
        <ul className="tasks__list list">
          <li className="tasks__item">Помогать студентам ставить цели</li>
          <li className="tasks__item">Рефлексировать и делать выводы</li>
          <li className="tasks__item">Отвечать на их вопросы в чате</li>
          <li className="tasks__item">Проводить вебинары 2 раза в месяц</li>
          <li className="tasks__item">Давать обратную связь</li>
          <li className="tasks__item">Делиться опытом и мотивировать</li>
        </ul>
        <div className="tasks__info">
          <img className="tasks__image" src={chair} alt="Изображение кресла режиссера"></img>
          <div className="tasks__text-block">
            <p className="tasks__text">Оплата за ведение группы</p>
            <p className="tasks__text">&sim;35 000-50 000 &#8381; в месяц</p>
          </div>
        </div>
        <button type="button" className="tasks__button button"><a className="tasks__link" href="#">Смотреть предложения</a></button>
      </div>
      <div className="tasks__container tasks__container_second">
        <h2 className="tasks__title">Задачи ревьюера</h2>
        <ul className="tasks__list list">
          <li className="tasks__item">Проверять код и проекты студентов</li>
          <li className="tasks__item">Простыми словами объяснять им их ошибки</li>
          <li className="tasks__item">Давать корректирующую обратную связь</li>
          <li className="tasks__item">Оценивать работы - зачёт/незачёт</li>
        </ul>
        <div className="tasks__info tasks__info_second">
          <div className="tasks__text-block tasks__text-block_second">
            <p className="tasks__text">Оплата за каждое&nbsp;ревью</p>
            <p className="tasks__text">В среднем 35 000&#8381; в месяц</p>
          </div>
          <img className="tasks__image tasks__image_second" src={glasses} alt="Очки"></img>
        </div>
        <button type="button" className="tasks__button button"><a className="tasks__link" href="#">Смотреть предложения</a></button>
      </div>

    </section>
  );
}

export default Tasks;
