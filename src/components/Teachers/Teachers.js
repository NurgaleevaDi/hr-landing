/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Teachers.css';

import Teacher from './Teacher/Teacher';

const Teachers = ({ componentRef }) => {
  const [data, setData] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleLeftBtnClick = () => {
    if (slideIndex <= 0) {
      setSlideIndex(data.length - 3);
    } else {
    // eslint-disable-next-line no-shadow
      setSlideIndex((slideIndex) => slideIndex - 1);
    }
  };

  const handleRightBtnClick = () => {
    if (slideIndex >= data.length - 3) {
      setSlideIndex(0);
    } else {
    // eslint-disable-next-line no-shadow
      setSlideIndex((slideIndex) => slideIndex + 1);
    }
  };

  const fetchData = async () => {
    const preparsedData = await fetch('https://6383c7383fa7acb14fe7f3e1.mockapi.io/teachers');
    const parsed = await preparsedData.json();
    setData(parsed);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(slideIndex);

  return (
    <section className="teachers" ref={componentRef}>
      <div className="teachers__inner">
        <div className="teachers__header-wrapper">
          <div className="teachers__header-text">
            <h3 className="teachers__header-title">
            Что говорит команда
            </h3>
            <p className="teachers__header-subtitle">Впечатления преподавателей, которые уже с нами </p>
          </div>
          <div className="teachers__btns">
            <button onClick={() => handleLeftBtnClick()} className="teachers__btn teachers__btn-left"></button>
            <button onClick={handleRightBtnClick} className="teachers__btn teachers__btn-right"></button>
          </div>
        </div>
        <ul className="teachers__container" style={{ transform: `translateX(-${slideIndex * 415}px)` }}>
          {data.map((item) => <Teacher key={item.id} {...item} />)}
        </ul>
      </div>
    </section>
  );
};

export default Teachers;
