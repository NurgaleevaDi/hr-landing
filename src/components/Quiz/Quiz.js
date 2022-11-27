/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Slider from './Slider/Slider';
import './Quiz.css';

const Quiz = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <section className="quiz">
      <div className="quiz__inner">
        <Slider />
        <div className="quiz__description">
          <h2 className="quiz__title">Не знаешь, как выбрать между наставником и ревьюером?</h2>
          <p className="quiz__subtitle">Ответь на несколько вопросов и узнай, какая роль подойдет тебе больше</p>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
