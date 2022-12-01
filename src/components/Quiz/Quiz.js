/* eslint-disable react/prop-types */
import React from 'react';
import Slider from './Slider/Slider';
import './Quiz.css';
import bubble from './images/Bubble.png';

const Quiz = ({
  componentRef, onRedirectButton, vacancies, setIsPopupWithFormOpen, body
}) => (
    <section className="quiz" ref={componentRef}>
      <div className="quiz__wrapper">
        <h2 className="quiz__title">Ответь на несколько вопросов
и узнай, какая роль подойдет тебе больше</h2>
        <div className="quiz__inner">
          <div className="quiz__text">
            <p className="quiz__subtitle">Не знаешь, как выбрать между наставником и ревьюером? Выбери, что тебе больше нравится, как в Тиндере :)</p>
            <img src={bubble} alt="bubble" className="quiz__img" />
          </div>
          <Slider onRedirectButton={onRedirectButton} vacancies={vacancies}
        setIsPopupWithFormOpen={setIsPopupWithFormOpen} body={body} />
        </div>
      </div>
    </section>
);

export default Quiz;
