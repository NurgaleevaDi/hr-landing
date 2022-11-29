/* eslint-disable no-unused-vars */
import { React, useState } from 'react';
import Card from './Card/Card';
import './Slider.css';
import cardsList from './datas';
import Result from './Result/Result';

const Slider = () => {
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);

  return (
    <ul className='slider' >
      {cardsList.map((text, i) => <Card key={i}
       num={i} text={text} yes={yes} no={no} setNo={setNo} setYes={setYes} title='Мне нравится...' />)}
      {yes === no || yes === 8 ? <Card yes={yes} no={no} setNo={setNo} setYes={setYes} title='У тебя больше двух лет практики?'
      num={8} /> : null };
      {no === 8 && yes === 0 ? <Result
       btnText='Перейти к форме'
        title='Кажется, мы запутались'
          yes={yes}
          no={no} /> : <Result
          btnText={
           yes > no
             ? 'К вакансиям ревьюеров'
             : 'К вакансиям наставников'
           }
           title={
             yes > no
               ? 'Рекомендуем присмотреться к позиции ревьюера'
               : 'Рекомендуем присмотреться к позиции наставника'
             }
             yes={yes}
             no={no} />}
    </ul>
  );
};

export default Slider;
