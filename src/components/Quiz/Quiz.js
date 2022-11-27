/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Slider from './Slider/Slider';
import './Quiz.css';

const Quiz = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <section className="quiz">
      <Slider />
    </section>
  );
};

export default Quiz;
